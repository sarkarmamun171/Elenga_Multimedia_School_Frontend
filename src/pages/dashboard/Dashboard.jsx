import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

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
        <div className="p-10">

            <h1 className="text-3xl font-bold">
                Welcome {user?.name}
            </h1>

            <p className="mt-3">
                Email: {user?.email}
            </p>

            <button
                onClick={handleLogout}
                className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
                Logout
            </button>

        </div>
    );      

}

export default Dashboard;