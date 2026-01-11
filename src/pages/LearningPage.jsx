import { useState } from 'react';
import { PageContainer } from '../components/PageContainer';
import { ProgressCard } from '../components/ProgressCard';

const MODULES = [
  {
    id: 'budgeting',
    category: 'Budgeting Basics',
    title: 'Budgeting Basics',
    description: 'Learn how to create and stick to a budget',
    completed: 2,
    total: 5,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'saving',
    category: 'The Art of Saving',
    title: 'The Art of Saving',
    description: 'Master different saving strategies',
    completed: 0,
    total: 4,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'investing',
    category: 'Investing in PNG',
    title: 'Investing in PNG',
    description: 'Understand investment opportunities locally',
    completed: 3,
    total: 6,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'debt',
    category: 'Managing Debt',
    title: 'Managing Debt Wisely',
    description: 'Learn how to manage and pay off debt',
    completed: 1,
    total: 4,
    color: 'from-orange-500 to-orange-600',
  },
];

const LESSON_BREAKDOWN = {
  budgeting: [
    { name: 'What is a Budget?', duration: '5 min' },
    { name: 'The 50/30/20 Rule', duration: '8 min' },
    { name: 'Tracking Your Spending', duration: '6 min' },
    { name: 'Adjusting Your Budget', duration: '7 min' },
    { name: 'Budget Tools & Apps', duration: '5 min' },
  ],
  saving: [
    { name: 'Why Save?', duration: '5 min' },
    { name: 'Emergency Funds', duration: '8 min' },
    { name: 'Savings Strategies', duration: '7 min' },
    { name: 'High-Interest Savings', duration: '6 min' },
  ],
  investing: [
    { name: 'Investment Basics', duration: '8 min' },
    { name: 'Risk & Return', duration: '7 min' },
    { name: 'Local Investment Options', duration: '10 min' },
    { name: 'Building a Portfolio', duration: '9 min' },
    { name: 'Investment Case Studies', duration: '8 min' },
    { name: 'Getting Started', duration: '6 min' },
  ],
  debt: [
    { name: 'Understanding Debt', duration: '6 min' },
    { name: 'Types of Debt', duration: '7 min' },
    { name: 'Debt Repayment Strategies', duration: '8 min' },
    { name: 'Credit Score Basics', duration: '6 min' },
  ],
};

export function LearningPage() {
  const [expandedModule, setExpandedModule] = useState(null);

  return (
    <PageContainer>
      {/* Header */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 pt-8">
        <h1 className="text-3xl font-bold mb-2">📚 Learning Hub</h1>
        <p className="text-gray-200 text-sm">
          Expand your financial knowledge with bite-sized lessons
        </p>
      </div>

      {/* Overview Stats */}
      <div className="px-6 py-4 bg-navy-50 border-b border-navy-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-600">Lessons Completed</p>
            <p className="text-2xl font-bold text-navy-900">6 of 19</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">Completion Rate</p>
            <p className="text-2xl font-bold text-navy-900">32%</p>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="px-6 py-4 space-y-4">
        {MODULES.map((module) => (
          <div key={module.id}>
            <button
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              className="w-full mb-3"
            >
              <ProgressCard
                title={module.title}
                category={module.category}
                completed={module.completed}
                total={module.total}
              />
            </button>

            {/* Expanded Lesson List */}
            {expandedModule === module.id && (
              <div className="mb-4 bg-white border border-gray-200 rounded-lg overflow-hidden">
                {LESSON_BREAKDOWN[module.id].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-b border-gray-100 last:border-b-0 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-left">
                      <p className="font-medium text-navy-900">{lesson.name}</p>
                      <p className="text-xs text-gray-600">{lesson.duration}</p>
                    </div>
                    {idx < module.completed ? (
                      <span className="text-green-600 font-bold text-lg">✓</span>
                    ) : (
                      <span className="text-gray-300">→</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Featured Lesson */}
      <div className="mx-6 my-4 bg-gradient-to-r from-navy-100 to-gray-50 border-2 border-navy-200 rounded-lg p-4">
        <h3 className="font-bold text-navy-900 mb-2">✨ Featured This Week</h3>
        <p className="text-sm text-gray-600 mb-3">
          <strong>"The 50/30/20 Rule"</strong> - Master the budgeting technique that changed thousands of lives.
        </p>
        <button className="w-full bg-navy-900 text-white py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors text-sm">
          Start Lesson
        </button>
      </div>

      {/* Achievement Preview */}
      <div className="mx-6 my-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <h3 className="font-bold text-navy-900 mb-2">🏆 Unlock Badges</h3>
        <p className="text-sm text-gray-600">
          Complete all lessons in any module to unlock a special achievement badge!
        </p>
      </div>
    </PageContainer>
  );
}
