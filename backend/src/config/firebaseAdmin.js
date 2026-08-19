import admin from "firebase-admin";

if (!admin.getApps().length) {
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("🚀 Firebase Admin SDK initialized successfully.");
    } else {
      console.warn("⚠️ WARNING: FIREBASE_SERVICE_ACCOUNT environment variable is not defined. Google OAuth authentication will not function.");
    }
  } catch (error) {
    console.error("❌ Failed to initialize Firebase Admin SDK:", error.message);
  }
}

export default admin;
