import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        }
    };

    return (
        <div className="flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Right Side */}
            <div className="flex-1">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <div className="p-10">

                    <h1 className="text-3xl font-bold">
                        Welcome {user?.name}
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Email: {user?.email}
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold">
                            Dashboard Content
                        </h2>

                        <p className="text-gray-500 mt-2">
                            This is the dashboard page.
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="mt-8 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;