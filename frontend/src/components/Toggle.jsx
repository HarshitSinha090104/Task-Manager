function Toggle({ status, onClick }) {
  const color =
    status === "TODO"
      ? "bg-red-500"
      : status === "IN_PROGRESS"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <button
      onClick={onClick}
      className={`${color} px-3 py-1 rounded text-white`}
    >
      {status}
    </button>
  );
}

export default Toggle;