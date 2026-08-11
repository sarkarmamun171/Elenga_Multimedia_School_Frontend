import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/website/Home";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Students from "../pages/students/Students";

function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/students"
                element={
                    <ProtectedRoute>
                        <Students />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default AppRoutes;