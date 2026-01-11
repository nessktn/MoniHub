import { useState } from 'react';

export function GoalModal({ isOpen, goal = null, onClose, onSave }) {
  const [formData, setFormData] = useState(
    goal || { title: '', targetAmount: '', deadline: '' }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: '', targetAmount: '', deadline: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-2xl p-6 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-navy-900">
            {goal ? 'Edit Goal' : 'Add New Goal'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-navy-900 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1">
              Goal Name
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., School Fees"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-navy-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1">
              Target Amount (Kina)
            </label>
            <input
              type="number"
              value={formData.targetAmount}
              onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
              placeholder="e.g., 5000"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-navy-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1">
              Deadline (Optional)
            </label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-navy-900 focus:outline-none"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium hover:bg-navy-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              {goal ? 'Update Goal' : 'Create Goal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
