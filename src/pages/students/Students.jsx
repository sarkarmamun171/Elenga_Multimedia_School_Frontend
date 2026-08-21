import { useEffect, useState } from "react";
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showForm, setShowForm] = useState(false);

    const [editingStudent, setEditingStudent] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        class_name: "",
        roll_number: "",
    });


    // =========================
    // GET Students
    // =========================

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

            console.error(error);

            setError("Failed to load students.");

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        fetchStudents();
    }, []);


    // =========================
    // Input Change
    // =========================

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    // =========================
    // Open Add Form
    // =========================

    const handleAddStudent = () => {

        setEditingStudent(null);

        setFormData({
            name: "",
            email: "",
            phone: "",
            class_name: "",
            roll_number: "",
        });

        setShowForm(true);
    };


    // =========================
    // Open Edit Form
    // =========================

    const handleEdit = (student) => {

        setEditingStudent(student);

        setFormData({
            name: student.name || "",
            email: student.email || "",
            phone: student.phone || "",
            class_name: student.class_name || "",
            roll_number: student.roll_number || "",
        });

        setShowForm(true);
    };


    // =========================
    // Create / Update
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingStudent) {

                // UPDATE

                const response = await axios.put(
                    `${import.meta.env.VITE_API_URL}/students/${editingStudent.id}`,
                    formData,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log(response.data);

            } else {

                // CREATE

                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/students`,
                    formData,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log(response.data);
            }


            // Reset Form

            setFormData({
                name: "",
                email: "",
                phone: "",
                class_name: "",
                roll_number: "",
            });

            setEditingStudent(null);

            setShowForm(false);

            // Refresh table

            fetchStudents();

        } catch (error) {

            console.error(
                "Create/Update student error:",
                error
            );

            if (error.response?.data?.errors) {

                console.log(
                    error.response.data.errors
                );

            }

            setError(
                error.response?.data?.message ||
                "Something went wrong."
            );
        }
    };


    // =========================
    // Delete Student
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/students/${id}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            console.log(response.data);

            // Refresh table

            fetchStudents();

        } catch (error) {

            console.error(
                "Delete student error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to delete student."
            );
        }
    };


    return (
        <div>

            {/* ================= Header ================= */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-bold">
                        Students
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage All Students
                    </p>

                </div>


                <button
                    onClick={handleAddStudent}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                    + Add Student
                </button>

            </div>


            {/* ================= Error ================= */}

            {error && (

                <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-700">
                    {error}
                </div>

            )}


            {/* ================= Student Form ================= */}

            {showForm && (

                <div className="bg-white rounded-lg shadow p-6 mb-6">

                    <div className="flex justify-between items-center mb-5">

                        <h2 className="text-xl font-semibold">

                            {editingStudent
                                ? "Edit Student"
                                : "Add New Student"
                            }

                        </h2>


                        <button
                            onClick={() => {
                                setShowForm(false);
                                setEditingStudent(null);
                            }}
                            className="text-gray-500 hover:text-red-500 text-xl"
                        >
                            ✕
                        </button>

                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Name */}

                            <div>

                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                    required
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block text-sm font-medium mb-1">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                />

                            </div>


                            {/* Class */}

                            <div>

                                <label className="block text-sm font-medium mb-1">
                                    Class
                                </label>

                                <input
                                    type="text"
                                    name="class_name"
                                    value={formData.class_name}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                    required
                                />

                            </div>


                            {/* Roll Number */}

                            <div>

                                <label className="block text-sm font-medium mb-1">
                                    Roll Number
                                </label>

                                <input
                                    type="text"
                                    name="roll_number"
                                    value={formData.roll_number}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                />

                            </div>

                        </div>


                        {/* Buttons */}

                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false);
                                    setEditingStudent(null);
                                }}
                                className="px-5 py-2 rounded-lg border"
                            >
                                Cancel
                            </button>


                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                            >

                                {editingStudent
                                    ? "Update Student"
                                    : "Save Student"
                                }

                            </button>

                        </div>

                    </form>

                </div>

            )}


            {/* ================= Student Table ================= */}

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
                                Roll Number
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


                        {!loading &&
                            students.map((student) => (

                                <tr
                                    key={student.id}
                                    className="border-t"
                                >

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
                                        {student.roll_number}
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        {student.phone || "-"}
                                    </td>


                                    <td className="px-6 py-4 text-sm">

                                        {/* Edit */}

                                        <button
                                            onClick={() =>
                                                handleEdit(student)
                                            }
                                            className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>


                                        {/* Delete */}

                                        <button
                                            onClick={() =>
                                                handleDelete(student.id)
                                            }
                                            className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}


                        {!loading &&
                            students.length === 0 &&
                            !error && (

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