import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";
import { toast } from "react-toastify";

interface ForgotPasswordResponse {
  message: string;
  devResetUrl?: string;
}

export default function ForgotPassword(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [devResetUrl, setDevResetUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post<ForgotPasswordResponse>("/auth/forgot-password", { email });
      setSubmitted(true);
      if (res.data.devResetUrl) {
        setDevResetUrl(res.data.devResetUrl);
      }
      toast.success("Password reset instructions sent!");
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.error || "Failed to request password reset. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = (): void => {
    setSubmitted(false);
    setDevResetUrl(null);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
                    error ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                  }`}
                  disabled={loading}
                />
                {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-75 focus:outline-none flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending Reset Link...</span>
                  </>
                ) : (
                  <span>Send Reset Link</span>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h3>
            <p className="text-sm text-gray-600 mb-6">
              If an account with <span className="font-semibold text-gray-800">{email}</span> exists,
              we have sent instructions to reset your password. The link expires in 15 minutes.
            </p>

            {devResetUrl && (
              <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg text-left">
                <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  Development Shortcut
                </p>
                <p className="text-xs text-amber-700 mb-2">
                  Email SMTP not configured? Click below to test your reset link directly:
                </p>
                <a
                  href={devResetUrl}
                  className="inline-block text-xs font-semibold text-blue-600 hover:text-blue-800 underline break-all"
                >
                  {devResetUrl}
                </a>
              </div>
            )}

            <button
              onClick={handleResetForm}
              className="text-xs text-blue-600 hover:underline font-medium block mx-auto mb-4"
            >
              Didn't receive it? Click here to try again
            </button>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <Link
            to="/sign-in"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
