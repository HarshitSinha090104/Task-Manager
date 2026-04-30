import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetchProjects = async () => {
    const res = await API.get("/api/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async () => {
    await API.post("/api/projects", { name });
    setName("");
    fetchProjects();
  };

  const toggle = async (p) => {
    const next =
      p.status === "TODO"
        ? "IN_PROGRESS"
        : p.status === "IN_PROGRESS"
        ? "COMPLETED"
        : "TODO";

    await API.put(`/api/projects/${p.id}/status?status=${next}`);
    fetchProjects();
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <div className="p-6">

        <div className="flex mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 mr-2 flex-1 rounded bg-slate-700 text-white"
            placeholder="New Project"
          />
          <button onClick={addProject}
            className="bg-blue-500 px-4 py-2 text-white rounded">
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <TaskCard key={p.id} item={p} onToggle={toggle} type="project" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;