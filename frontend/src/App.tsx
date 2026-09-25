import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import { PrivateRoute, PublicOnlyRoute } from "./components/AuthGuard";

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Routes>
        {/* Protected Routes (Authenticated Users only) */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* Public-Only Routes (Unauthenticated Users only) */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}
