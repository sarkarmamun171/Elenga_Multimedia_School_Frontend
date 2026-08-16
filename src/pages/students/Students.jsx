function Students(){
      const students = [
        {
            id: 1,
            name: "Rahim",
            email: "rahim@gmail.com",
            className: "Class 6",
            phone: "017XXXXXXXX",
        },
        {
            id: 2,
            name: "Karim",
            email: "karim@gmail.com",
            className: "Class 7",
            phone: "018XXXXXXXX",
        },
        {
            id: 3,
            name: "Hasan",
            email: "hasan@gmail.com",
            className: "Class 8",
            phone: "019XXXXXXXX",
        },
        {
            id: 4,
            name: "Jamal",
            email: "jamal@gmail.com",
            className: "Class 9",
            phone: "016XXXXXXXX",
        },
    ];
    return(
       <div>
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

    {students.map((student) => (
        <tr key={student.id} className="border-t">

            <td className="px-6 py-4">
                {student.id}
            </td>

            <td className="px-6 py-4 font-medium">
                {student.name}
            </td>

            <td className="px-6 py-4 text-gray-500">
                {student.email}
            </td>

            <td className="px-6 py-4">
                {student.className}
            </td>

            <td className="px-6 py-4">
                {student.phone}
            </td>

            <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline">
                    Edit
                </button>
            </td>

        </tr>
    ))}

</tbody>

    </table>

</div>
       </div>
    );
}
export default Students;