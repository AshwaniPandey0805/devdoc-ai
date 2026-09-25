import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
let adminApp;
if (!getApps().length) {
    try {
        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
            const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
            adminApp = initializeApp({
                credential: cert(serviceAccount),
            });
            console.log("🚀 Firebase Admin SDK initialized successfully.");
        }
        else {
            console.warn("⚠️ WARNING: FIREBASE_SERVICE_ACCOUNT environment variable is not defined. Google OAuth cryptographic verification will fallback in development mode.");
        }
    }
    catch (error) {
        console.error("❌ Failed to initialize Firebase Admin SDK:", error.message);
    }
}
else {
    adminApp = getApps()[0];
}
export { adminApp, getAuth };
export default adminApp;
