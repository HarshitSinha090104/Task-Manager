function TaskCard({ item, onToggle, type = "task" }) {

  const getColor = () => {
    if (item.status === "TODO") return "bg-red-100 text-red-600";
    if (item.status === "IN_PROGRESS") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-600";
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">

      <h3 className="text-gray-800 text-lg font-semibold mb-2">
        {type === "task" ? item.title : item.name}
      </h3>

      <span className={`${getColor()} px-2 py-1 text-xs rounded`}>
        {item.status}
      </span>

      <button
        onClick={() => onToggle(item)}
        className="mt-4 w-full bg-black py-2 rounded text-white hover:bg-gray-800"
      >
        Change Status
      </button>
    </div>
  );
}

export default TaskCard;