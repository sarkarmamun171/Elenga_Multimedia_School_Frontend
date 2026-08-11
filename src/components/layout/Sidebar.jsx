import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

            <h1 className="text-2xl font-bold mb-8">
                SMS Admin
            </h1>

            <ul className="space-y-4">

                <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
                    Dashboard
                </li>

                <li>
                    <Link to="/students" className="block hover:bg-blue-700 p-2 rounded">
                    Students
                    </Link>
                </li>

                <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
                    Teachers
                </li>

                <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
                    Classes
                </li>

                <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
                    Subjects
                </li>

                <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
                    Attendance
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;