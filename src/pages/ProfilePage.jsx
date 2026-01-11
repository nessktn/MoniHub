import { useState } from 'react';
import { PageContainer } from '../components/PageContainer';
import { BadgeItem } from '../components/BadgeItem';
import { Settings } from 'lucide-react';

const BADGES = [
  {
    id: 1,
    icon: '💾',
    title: 'Consistent Saver',
    description: '7 days of savings',
    unlocked: true,
  },
  {
    id: 2,
    icon: '📖',
    title: 'Stori Reader',
    description: 'Read 5 stories',
    unlocked: true,
  },
  {
    id: 3,
    icon: '🎯',
    title: 'Goal Crusher',
    description: 'Achieve a goal',
    unlocked: false,
  },
  {
    id: 4,
    icon: '📚',
    title: 'Knowledge Seeker',
    description: 'Complete 1 module',
    unlocked: true,
  },
  {
    id: 5,
    icon: '💪',
    title: 'Streak Master',
    description: '30 days of tracking',
    unlocked: false,
  },
  {
    id: 6,
    icon: '🌟',
    title: 'Financial Expert',
    description: 'Complete all modules',
    unlocked: false,
  },
  {
    id: 7,
    icon: '💎',
    title: 'Early Bird',
    description: 'Reach K10k savings',
    unlocked: false,
  },
  {
    id: 8,
    icon: '🚀',
    title: 'Investor',
    description: 'Complete investing module',
    unlocked: false,
  },
];

export function ProfilePage() {
  const [showSettings, setShowSettings] = useState(false);
  const [userName, setUserName] = useState('Kela');
  const [settingsForm, setSettingsForm] = useState({
    name: userName,
    email: 'kela@example.com',
    notifications: true,
  });

  const totalSaved = 5900; // K2500 + K1500 + K1900 from tracker
  const joinDate = '2025-09-15';
  const unlockedCount = BADGES.filter((b) => b.unlocked).length;

  const handleSettingsSave = (e) => {
    e.preventDefault();
    setUserName(settingsForm.name);
    setShowSettings(false);
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 pt-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">👤 Profile</h1>
          <p className="text-gray-200 text-sm">Manage your account & achievements</p>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 hover:bg-navy-700 rounded-lg transition-colors"
        >
          <Settings size={24} />
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="w-full bg-white rounded-t-2xl p-6 max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold text-navy-900 mb-4">Settings</h2>
            <form onSubmit={handleSettingsSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={settingsForm.name}
                  onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={settingsForm.email}
                  onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-navy-900">
                  Push Notifications
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setSettingsForm({
                      ...settingsForm,
                      notifications: !settingsForm.notifications,
                    })
                  }
                  className={`w-14 h-8 rounded-full transition-colors ${
                    settingsForm.notifications ? 'bg-navy-900' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full transition-transform ${
                      settingsForm.notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium hover:bg-navy-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User Info */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center text-4xl border-4 border-navy-900">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900">{userName}</h2>
            <p className="text-gray-600 text-sm">Member since {joinDate}</p>
          </div>
        </div>
      </div>

      {/* Total Impact */}
      <div className="mx-6 mb-6 bg-gradient-to-r from-navy-100 to-navy-50 border-2 border-navy-900 rounded-lg p-4">
        <h3 className="font-bold text-navy-900 mb-2">📊 Total Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Total Saved</p>
            <p className="text-3xl font-bold text-navy-900">K{totalSaved}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Achievements</p>
            <p className="text-3xl font-bold text-navy-900">{unlockedCount}/8</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold text-navy-900 mb-4">🏆 Achievements & Badges</h3>
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map((badge) => (
            <BadgeItem
              key={badge.id}
              icon={badge.icon}
              title={badge.title}
              description={badge.description}
              unlocked={badge.unlocked}
            />
          ))}
        </div>
      </div>

      {/* Account Stats */}
      <div className="mx-6 my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="font-bold text-navy-900 mb-3">Account Activity</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Last Login</span>
            <span className="font-medium text-navy-900">Today</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Stories Read</span>
            <span className="font-medium text-navy-900">5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lessons Completed</span>
            <span className="font-medium text-navy-900">6 of 19</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Active Goals</span>
            <span className="font-medium text-navy-900">3</span>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mx-6 my-6 p-4 bg-navy-50 border border-navy-200 rounded-lg">
        <h3 className="font-bold text-navy-900 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Have questions or need support? Reach out to our team.
        </p>
        <div className="flex gap-2">
          <button className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium text-sm hover:bg-navy-100 transition-colors">
            FAQ
          </button>
          <button className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-medium text-sm hover:bg-navy-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mx-6 mb-6">
        <button className="w-full border-2 border-red-500 text-red-500 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
          Logout
        </button>
      </div>
    </PageContainer>
  );
}
