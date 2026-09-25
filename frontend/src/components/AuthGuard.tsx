import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";

/**
 * Renders child routes if the user is authenticated.
 * Otherwise, redirects to the /sign-in page.
 */
export function PrivateRoute(): React.ReactElement {
  const { currentUser } = useAppSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

/**
 * Renders child routes only if the user is NOT authenticated.
 * Otherwise, redirects to the home/dashboard page.
 */
export function PublicOnlyRoute(): React.ReactElement {
  const { currentUser } = useAppSelector((state) => state.user);
  return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
}
