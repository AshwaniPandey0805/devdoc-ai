import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";
import { PrivateRoute, PublicOnlyRoute } from "./components/AuthGuard.jsx";

export default function App() {
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
