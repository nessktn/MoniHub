export function GoalCard({ id, title, targetAmount, currentAmount, deadline, onEdit }) {
  const remaining = targetAmount - currentAmount;
  const percentage = (currentAmount / targetAmount) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-navy-900 text-base">{title}</h3>
        <button
          onClick={() => onEdit(id)}
          className="text-gray-500 hover:text-navy-900 transition-colors"
        >
          ✎
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-navy-900 h-full transition-all duration-300"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-gray-600 text-xs">Saved</p>
          <p className="font-bold text-navy-900">K{currentAmount}</p>
        </div>
        <div>
          <p className="text-gray-600 text-xs">Remaining</p>
          <p className="font-bold text-navy-900">K{remaining}</p>
        </div>
        <div>
          <p className="text-gray-600 text-xs">Target</p>
          <p className="font-bold text-navy-900">K{targetAmount}</p>
        </div>
      </div>

      {deadline && (
        <p className="text-gray-500 text-xs mt-2">Deadline: {deadline}</p>
      )}
    </div>
  );
}
