import { useEffect, useState } from "react";
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/students`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            setStudents(response.data.data);

        } catch (error) {
            console.error("Error fetching students:", error);

            setError("Failed to load students.");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-3xl font-bold">
                        Students
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage All Students
                    </p>
                </div>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                    + Add Student
                </button>

            </div>


            {/* Error */}
            {error && (
                <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-700">
                    {error}
                </div>
            )}


            {/* Student Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                ID
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Name
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Email
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Class
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Phone
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {/* Loading */}
                        {loading && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    Loading students...
                                </td>
                            </tr>
                        )}


                        {/* Students */}
                        {!loading && students.map((student) => (

                            <tr key={student.id} className="border-t">

                                <td className="px-6 py-4 text-sm">
                                    {student.id}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    {student.name}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    {student.email || "-"}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    {student.class_name}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    {student.phone || "-"}
                                </td>

                                <td className="px-6 py-4 text-sm">

                                    <button className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                                        Edit
                                    </button>

                                    <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}


                        {/* No Data */}
                        {!loading && students.length === 0 && !error && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No students found.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Students;