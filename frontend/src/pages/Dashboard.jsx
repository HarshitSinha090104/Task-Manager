import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const role = localStorage.getItem("role");

  const fetchData = async () => {
    const t = await API.get("/api/tasks");
    setTasks(t.data);

    if (role === "ADMIN") {
      const p = await API.get("/api/projects");
      setProjects(p.data);
    }
  };

  const getNextStatus = (current) => {
    if (current === "TODO") return "IN_PROGRESS";
    if (current === "IN_PROGRESS") return "COMPLETED";
    return "TODO";
  };

  const toggleTask = async (task) => {
    const next = getNextStatus(task.status);
    await API.put(`/api/tasks/${task.id}/status?status=${next}`);
    fetchData();
  };

  const toggleProject = async (project) => {
    const next = getNextStatus(project.status);
    await API.put(`/api/projects/${project.id}/status?status=${next}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <div className="p-6">

        <h2 className="text-white text-2xl mb-4">Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tasks.map((t) => (
            <TaskCard key={t.id} item={t} onToggle={toggleTask} />
          ))}
        </div>

        {role === "ADMIN" && (
          <>
            <h2 className="text-white text-2xl mt-10 mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {projects.map((p) => (
                <TaskCard key={p.id} item={p} onToggle={toggleProject} type="project" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;