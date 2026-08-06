import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";


function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    password: "",
    });

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

        const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
         };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            Elenga Multimedia School
          </h1>

          <p className="text-gray-500 mt-2">
            School Management System
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Email
            </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;