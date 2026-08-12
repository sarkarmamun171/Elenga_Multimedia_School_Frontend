function Students(){
    return(
       <div>
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-3xl font-blod-bold">
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
       </div>
    );
}
export default Students;