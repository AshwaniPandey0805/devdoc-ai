import { initializeApp, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: (import.meta.env.VITE_FIREBASE_API_KEY as string) || "placeholder-api-key",
  authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string) || "placeholder-auth-domain",
  projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID as string) || "placeholder-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export default app;
