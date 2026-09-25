import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import api from "../api/client";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";

export default function Header(): React.ReactElement {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = async (): Promise<void> => {
    try {
      await api.post("/auth/signout");
      dispatch(signOutSuccess());
      toast.success("Signed out successfully");
      navigate("/sign-in");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to sign out");
    }
  };

  return (
    <header className="bg-white border-b border-gray-150 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            DevDocs AI
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {currentUser && (
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
          )}

          {currentUser ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
                <img
                  className="rounded-full h-8 w-8 object-cover border border-blue-100"
                  src={currentUser.avatar}
                  alt={currentUser.name}
                />
                <span className="hidden sm:inline text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-red-600 transition-colors p-1.5 hover:bg-gray-50 rounded-full"
                title="Sign Out"
              >
                <FiLogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/sign-in"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
