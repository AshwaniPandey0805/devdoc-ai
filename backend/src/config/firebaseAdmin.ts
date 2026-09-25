import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let adminApp: App | undefined;

if (!getApps().length) {
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      adminApp = initializeApp({
        credential: cert(serviceAccount),
      });
      console.log("🚀 Firebase Admin SDK initialized successfully.");
    } else {
      console.warn(
        "⚠️ WARNING: FIREBASE_SERVICE_ACCOUNT environment variable is not defined. Google OAuth cryptographic verification will fallback in development mode."
      );
    }
  } catch (error: any) {
    console.error("❌ Failed to initialize Firebase Admin SDK:", error.message);
  }
} else {
  adminApp = getApps()[0];
}

export { adminApp, getAuth };
export default adminApp;
