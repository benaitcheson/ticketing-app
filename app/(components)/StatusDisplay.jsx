const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    const statusColors = {
      open: "bg-blue-200",
      "in-progress": "bg-yellow-200",
      resolved: "bg-green-200",
      "in-review": "bg-purple-200",
      "requires-further-information": "bg-orange-200",
      closed: "bg-gray-200",
    };

    return statusColors[status.toLowerCase()] || "bg-slate-700";
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
