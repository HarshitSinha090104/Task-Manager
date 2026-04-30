import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-slate-950 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-white font-bold text-lg">Task Manager</h1>

      <div className="space-x-6 text-white">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>

        {role === "ADMIN" && (
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        )}

        <Link to="/tasks" className="hover:text-blue-400">Tasks</Link>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-1 rounded text-white hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;