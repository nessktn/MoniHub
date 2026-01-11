import { useState } from 'react';
import { PageContainer } from '../components/PageContainer';
import { GoalCard } from '../components/GoalCard';
import { GoalModal } from '../components/GoalModal';
import { Plus, TrendingUp, TrendingDown } from 'lucide-react';

const MOCK_GOALS = [
  {
    id: 1,
    title: 'School Fees',
    targetAmount: 5000,
    currentAmount: 3200,
    deadline: '2026-05-31',
  },
  {
    id: 2,
    title: 'Emergency Fund',
    targetAmount: 3000,
    currentAmount: 1500,
    deadline: '2026-12-31',
  },
  {
    id: 3,
    title: 'Laptop Purchase',
    targetAmount: 2000,
    currentAmount: 1200,
    deadline: '2026-06-30',
  },
];

const MOCK_TRANSACTIONS = [
  { id: 1, type: 'in', amount: 500, description: 'Weekly Allowance', date: '2026-01-10' },
  { id: 2, type: 'out', amount: 150, description: 'Groceries', date: '2026-01-09' },
  { id: 3, type: 'in', amount: 200, description: 'Side Gig Income', date: '2026-01-08' },
  { id: 4, type: 'out', amount: 75, description: 'Transport', date: '2026-01-07' },
  { id: 5, type: 'in', amount: 450, description: 'Monthly Stipend', date: '2026-01-06' },
  { id: 6, type: 'out', amount: 200, description: 'Books & Materials', date: '2026-01-05' },
];

export function TrackerPage() {
  const [goals, setGoals] = useState(MOCK_GOALS);
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [transactionType, setTransactionType] = useState('all');
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: 'in',
    amount: '',
    description: '',
  });

  const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalIncome = transactions
    .filter((t) => t.type === 'in')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === 'out')
    .reduce((sum, t) => sum + t.amount, 0);

  const handleSaveGoal = (goalData) => {
    if (editingGoal) {
      setGoals(
        goals.map((g) => (g.id === editingGoal.id ? { ...g, ...goalData } : g))
      );
      setEditingGoal(null);
    } else {
      setGoals([...goals, { ...goalData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (newTransaction.amount && newTransaction.description) {
      setTransactions([
        {
          id: Date.now(),
          type: newTransaction.type,
          amount: parseInt(newTransaction.amount),
          description: newTransaction.description,
          date: new Date().toISOString().split('T')[0],
        },
        ...transactions,
      ]);
      setNewTransaction({ type: 'in', amount: '', description: '' });
      setShowTransactionForm(false);
    }
  };

  const filteredTransactions =
    transactionType === 'all'
      ? transactions
      : transactions.filter((t) => t.type === transactionType);

  return (
    <PageContainer>
      {/* Header */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 pt-8">
        <h1 className="text-3xl font-bold mb-2">💰 Kina Tracker</h1>
        <p className="text-gray-200 text-sm">
          Track your goals and manage your cash flow
        </p>
      </div>

      {/* Quick Summary */}
      <div className="px-6 py-4 grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Total Income</p>
          <p className="text-2xl font-bold text-green-700">K{totalIncome}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Total Expenses</p>
          <p className="text-2xl font-bold text-red-700">K{totalExpenses}</p>
        </div>
        <div className="col-span-2 bg-navy-50 border border-navy-200 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Goals Progress</p>
          <p className="text-2xl font-bold text-navy-900">
            K{totalSaved} / K{totalTarget}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
            <div
              className="bg-navy-900 h-full transition-all"
              style={{ width: `${(totalSaved / totalTarget) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-navy-900">My Goals</h2>
          <button
            onClick={() => {
              setEditingGoal(null);
              setIsModalOpen(true);
            }}
            className="bg-navy-900 text-white p-2 rounded-lg hover:bg-navy-800 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="space-y-3">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              id={goal.id}
              title={goal.title}
              targetAmount={goal.targetAmount}
              currentAmount={goal.currentAmount}
              deadline={goal.deadline}
              onEdit={(id) => {
                setEditingGoal(goals.find((g) => g.id === id));
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Kina Ledger */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-navy-900">Kina Ledger</h2>
          <button
            onClick={() => setShowTransactionForm(!showTransactionForm)}
            className="bg-navy-900 text-white px-3 py-2 rounded-lg hover:bg-navy-800 transition-colors text-sm font-medium flex items-center gap-1"
          >
            <Plus size={16} /> Add
          </button>
        </div>

        {/* Transaction Form */}
        {showTransactionForm && (
          <form onSubmit={handleAddTransaction} className="bg-navy-50 border border-navy-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button
                type="button"
                onClick={() => setNewTransaction({ ...newTransaction, type: 'in' })}
                className={`py-2 rounded-lg font-medium text-sm transition-colors ${
                  newTransaction.type === 'in'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Cash In
              </button>
              <button
                type="button"
                onClick={() => setNewTransaction({ ...newTransaction, type: 'out' })}
                className={`py-2 rounded-lg font-medium text-sm transition-colors ${
                  newTransaction.type === 'out'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Cash Out
              </button>
            </div>
            <input
              type="number"
              placeholder="Amount (K)"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg mb-3 focus:border-navy-900 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={newTransaction.description}
              onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg mb-3 focus:border-navy-900 focus:outline-none"
              required
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowTransactionForm(false)}
                className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium text-sm hover:bg-navy-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-medium text-sm hover:bg-navy-800 transition-colors"
              >
                Add
              </button>
            </div>
          </form>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          {['all', 'in', 'out'].map((type) => (
            <button
              key={type}
              onClick={() => setTransactionType(type)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                transactionType === type
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type === 'all' ? 'All' : type === 'in' ? 'Cash In' : 'Cash Out'}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="space-y-2">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 flex-1">
                {transaction.type === 'in' ? (
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-600" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDown size={20} className="text-red-600" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-navy-900">{transaction.description}</p>
                  <p className="text-xs text-gray-600">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-bold text-lg ${
                  transaction.type === 'in' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.type === 'in' ? '+' : '-'}K{transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Goal Modal */}
      <GoalModal
        isOpen={isModalOpen}
        goal={editingGoal}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveGoal}
      />
    </PageContainer>
  );
}
