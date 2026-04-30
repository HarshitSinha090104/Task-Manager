import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("/api/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
  <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

   
    <h1 className="text-4xl font-bold text-gray-800 mb-6">
      Task Manager
    </h1>

    {/* LOGIN CARD */}
    <div className="bg-white border shadow-md p-6 rounded w-80">
      <h2 className="text-gray-800 text-xl mb-4 text-center">Login</h2>

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full p-2 mb-3 border rounded"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-black w-full py-2 text-white rounded hover:bg-gray-800"
      >
        Login
      </button>

      <p className="text-gray-600 mt-3 text-center">
        No account? <Link to="/signup" className="text-blue-500">Signup</Link>
      </p>
    </div>
  </div>
);
}

export default Login;