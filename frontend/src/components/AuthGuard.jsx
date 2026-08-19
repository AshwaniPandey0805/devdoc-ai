import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/**
 * Renders child routes if the user is authenticated.
 * Otherwise, redirects to the /sign-in page.
 */
export function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

/**
 * Renders child routes only if the user is NOT authenticated.
 * Otherwise, redirects to the home/dashboard page.
 */
export function PublicOnlyRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
}
