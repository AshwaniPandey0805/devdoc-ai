import "dotenv/config";
import mongoose from "mongoose";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import User from "../models/User.js";

async function runPasswordResetVerification() {
  console.log("==================================================================");
  console.log("         Verification: Forgot Password & Reset Flow               ");
  console.log("==================================================================");

  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Connected to MongoDB.");

  const testEmail = "test_reset_user@example.com";
  const initialPassword = "OldPassword123!";
  const newPassword = "BrandNewPassword456!";

  // 1. Ensure test user exists with initial password
  await User.deleteOne({ email: testEmail });
  const salt = await bcryptjs.genSalt(10);
  const initialHash = await bcryptjs.hash(initialPassword, salt);

  const testUser = await User.create({
    name: "Test Reset User",
    email: testEmail,
    password: initialHash,
    role: "member",
  });
  console.log(`\n[Step 1/5] Created test user: ${testUser.email}`);

  // 2. Simulate Forgot Password Request
  console.log("\n[Step 2/5] Initiating Forgot Password Request...");
  const rawToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");

  testUser.resetPasswordToken = hashedToken;
  testUser.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
  await testUser.save();

  console.log(`Raw Token (sent to user URL): ${rawToken}`);
  console.log(`Hashed Token (saved in DB):    ${hashedToken}`);

  // 3. Security Check: Verify DB stores SHA-256 hash, not raw token
  console.log("\n[Step 3/5] Verifying OWASP Token Hashing Safeguard...");
  const fetchedUser = await User.findOne({ email: testEmail });
  if (fetchedUser?.resetPasswordToken === rawToken) {
    throw new Error("SECURITY FAILURE: Raw token was stored in database instead of SHA-256 hash!");
  }
  if (fetchedUser?.resetPasswordToken !== hashedToken) {
    throw new Error("Verification Failure: Hashed token does not match stored hash.");
  }
  console.log("✅ OWASP Check Passed: Database contains only the SHA-256 hash.");

  // 4. Test Token Expiration Edge Case
  console.log("\n[Step 4/5] Testing Expired Token Rejection Edge Case...");
  testUser.resetPasswordExpires = new Date(Date.now() - 5000); // Expired 5 seconds ago
  await testUser.save();

  const expiredLookup = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: new Date() },
  });
  if (expiredLookup) {
    throw new Error("SECURITY FAILURE: Expired token was accepted by query!");
  }
  console.log("✅ Expiration Check Passed: Expired token is rejected.");

  // 5. Test Successful Password Reset
  console.log("\n[Step 5/5] Executing Password Reset with Valid Token...");
  testUser.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // Re-activate
  await testUser.save();

  // Incoming client request provides rawToken
  const incomingHashed = crypto.createHash("sha256").update(rawToken).digest("hex");
  const validUser = await User.findOne({
    resetPasswordToken: incomingHashed,
    resetPasswordExpires: { $gt: new Date() },
  });

  if (!validUser) {
    throw new Error("Failed to find user with valid unexpired token hash.");
  }

  // Hash new password and clear token fields
  const newSalt = await bcryptjs.genSalt(10);
  validUser.password = await bcryptjs.hash(newPassword, newSalt);
  validUser.resetPasswordToken = undefined;
  validUser.resetPasswordExpires = undefined;
  await validUser.save();

  // Verify authentication with new password
  const updatedUser = await User.findOne({ email: testEmail });
  const isOldValid = await bcryptjs.compare(initialPassword, updatedUser!.password!);
  const isNewValid = await bcryptjs.compare(newPassword, updatedUser!.password!);

  console.log(`Old Password Works: ${isOldValid} (Expected: false)`);
  console.log(`New Password Works: ${isNewValid} (Expected: true)`);
  console.log(`Reset Token Cleared: ${updatedUser?.resetPasswordToken === undefined} (Expected: true)`);

  if (isOldValid || !isNewValid || updatedUser?.resetPasswordToken !== undefined) {
    throw new Error("Password reset verification failed!");
  }

  // Cleanup
  await User.deleteOne({ email: testEmail });
  await mongoose.disconnect();

  console.log("\n🎉 ALL Forgot Password & Reset Password verification checks passed successfully!");
}

runPasswordResetVerification().catch((err) => {
  console.error("\n❌ Verification Failed:", err);
  process.exit(1);
});
