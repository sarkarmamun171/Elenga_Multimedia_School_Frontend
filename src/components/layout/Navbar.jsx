function Navbar(){
       const user = JSON.parse(localStorage.getItem("user"));
    return(
        <div className="h-16 bg-white shadow flex justify-between items-center px-6"> 
            <h2 className="text-xl fornt-semiblod">
                Dashboard
            </h2>

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                   {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p className="font-semibold">
                        {user?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {user?.email}
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Navbar;