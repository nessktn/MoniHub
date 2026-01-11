export function ProgressCard({ title, completed, total, category }) {
  const percentage = (completed / total) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-navy-900 text-base">{title}</h3>
          <span className="text-xs bg-navy-100 text-navy-900 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{completed} of {total} lessons completed</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-navy-900 h-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-3 flex gap-2">
        <button className="flex-1 bg-navy-900 text-white py-2 rounded font-medium text-sm hover:bg-navy-800 transition-colors">
          Continue
        </button>
        <button className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded font-medium text-sm hover:bg-navy-50 transition-colors">
          Preview
        </button>
      </div>
    </div>
  );
}
