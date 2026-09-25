import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, UserCredential } from "firebase/auth";
import { app } from "../firebase";
import api from "../api/client";
import { useAppDispatch } from "../redux/store";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AuthResponse } from "../types";

/**
 * OAuth button initiating Firebase Google Sign-In popups.
 * Sends the generated ID Token to the backend for session verification.
 */
export default function OAuth(): React.ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async (): Promise<void> => {
    try {
      dispatch(signInStart());

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const auth = getAuth(app);
      const result: UserCredential = await signInWithPopup(auth, provider);

      // Retrieve Google OAuth ID token from Firebase user session
      const idToken = await result.user.getIdToken();

      // Submit verification token to backend auth controller
      const res = await api.post<AuthResponse>("/auth/google", { idToken });

      dispatch(signInSuccess(res.data.user));
      toast.success(res.data.message || "Signed in successfully");
      navigate("/");
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.message || "Google sign-in failed";
      dispatch(signInFailure(errorMsg));
      toast.error(errorMsg);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold p-3 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
    >
      <FcGoogle className="h-5 w-5" />
      Continue with Google
    </button>
  );
}
