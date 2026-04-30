import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await API.post("/api/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const toggle = async (t) => {
    const next =
      t.status === "TODO"
        ? "IN_PROGRESS"
        : t.status === "IN_PROGRESS"
        ? "COMPLETED"
        : "TODO";

    await API.put(`/api/tasks/${t.id}/status?status=${next}`);
    fetchTasks();
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <div className="p-6">

        <div className="flex mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 mr-2 flex-1 rounded bg-slate-700 text-white"
            placeholder="New Task"
          />
          <button onClick={addTask}
            className="bg-blue-500 px-4 py-2 text-white rounded">
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tasks.map((t) => (
            <TaskCard key={t.id} item={t} onToggle={toggle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;