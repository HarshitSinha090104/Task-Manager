import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("MEMBER");

  const navigate = useNavigate();

  const signup = async () => {
    try {
      await API.post("/api/auth/signup", {
        name,
        email,
        password,
        role,
      });

      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
  <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

   
    <h1 className="text-4xl font-bold text-gray-800 mb-6">
      Task Manager
    </h1>

    {/* SIGNUP CARD */}
    <div className="bg-white border shadow-md p-6 rounded w-80">
      <h2 className="text-gray-800 text-xl mb-4 text-center">Signup</h2>

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

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

      <select
        className="w-full p-2 mb-3 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="MEMBER">Member</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button
        onClick={signup}
        className="bg-black w-full py-2 text-white rounded hover:bg-gray-800"
      >
        Signup
      </button>
    </div>
  </div>
);
}

export default Signup;