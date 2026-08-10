import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div className="flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Right Side */}
            <div className="flex-1">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <div className="p-6">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Layout;