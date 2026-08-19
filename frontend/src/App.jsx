import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

// Stage 2 will add: Login page + protected route wrapper

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
