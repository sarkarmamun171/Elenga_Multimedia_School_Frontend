import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Layout from "../../components/layout/Layout";

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
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        }
    };

    return (
        <Layout>
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

                <button
                    onClick={handleLogout}
                    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                >
                    Logout
                </button>
            </div>
        </Layout>
    );
}

export default Dashboard;