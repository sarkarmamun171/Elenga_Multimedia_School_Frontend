function Students(){
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
                    #
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

            <tr className="border-t">
                <td className="px-6 py-4">
                    1
                </td>

                <td className="px-6 py-4 font-medium">
                    Rahim
                </td>

                <td className="px-6 py-4 text-gray-500">
                    rahim@gmail.com
                </td>

                <td className="px-6 py-4">
                    Class 6
                </td>

                <td className="px-6 py-4">
                    017XXXXXXXX
                </td>

                <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline">
                        Edit
                    </button>
                </td>
            </tr>

            <tr className="border-t">
                <td className="px-6 py-4">
                    2
                </td>

                <td className="px-6 py-4 font-medium">
                    Karim
                </td>

                <td className="px-6 py-4 text-gray-500">
                    karim@gmail.com
                </td>

                <td className="px-6 py-4">
                    Class 7
                </td>

                <td className="px-6 py-4">
                    018XXXXXXXX
                </td>

                <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline">
                        Edit
                    </button>
                </td>
            </tr>

        </tbody>

    </table>

</div>
       </div>
    );
}
export default Students;