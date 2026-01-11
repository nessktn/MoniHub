import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { StoryCard } from '../components/StoryCard';
import { ChevronRight } from 'lucide-react';

const MOCK_STORIES = [
  {
    id: 'story-1',
    photo: null,
    title: 'From Street Sales to Shop Owner',
    duration: '3 min read',
    excerpt: 'How Maria turned her small street vending business into a successful retail shop in Port Moresby...',
  },
  {
    id: 'story-2',
    photo: null,
    title: 'Building Wealth Through Savings',
    duration: '4 min read',
    excerpt: 'John\'s journey from zero savings to K50,000 in just 18 months using simple budgeting techniques...',
  },
  {
    id: 'story-3',
    photo: null,
    title: 'First Investment Success',
    duration: '3 min read',
    excerpt: 'How Amara made her first investment in a small business cooperative and doubled her money...',
  },
  {
    id: 'story-4',
    photo: null,
    title: 'Breaking the Paycheck-to-Paycheck Cycle',
    duration: '5 min read',
    excerpt: 'A teacher\'s story about creating financial stability and planning for the future...',
  },
  {
    id: 'story-5',
    photo: null,
    title: 'Entrepreneurship in Rural PNG',
    duration: '4 min read',
    excerpt: 'How a rural entrepreneur used financial planning to expand his agricultural business...',
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const [userName] = useState('Kela');

  const handleStorySelect = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 pt-8">
        <div>
          <p className="text-gray-200 text-sm">Welcome back</p>
          <h1 className="text-3xl font-bold mb-2">Good Morning, {userName}! 👋</h1>
          <p className="text-gray-200 text-sm">
            Ready to take control of your financial future?
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4 grid grid-cols-3 gap-3">
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Active Goals</p>
          <p className="text-2xl font-bold text-navy-900">3</p>
        </div>
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Lessons Done</p>
          <p className="text-2xl font-bold text-navy-900">8</p>
        </div>
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Total Saved</p>
          <p className="text-2xl font-bold text-navy-900">K2.5k</p>
        </div>
      </div>

      {/* Stori Vault Section */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-navy-900">📖 Stori Vault</h2>
            <p className="text-xs text-gray-600">Real stories from PNG entrepreneurs & savers</p>
          </div>
          <button className="text-navy-900 hover:text-navy-800 flex items-center gap-1">
            <span className="text-sm font-medium">See All</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Horizontal Scroll Feed */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory">
          {MOCK_STORIES.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              photo={story.photo}
              title={story.title}
              duration={story.duration}
              excerpt={story.excerpt}
              onSelect={handleStorySelect}
            />
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mx-6 my-4 bg-gradient-to-r from-navy-100 to-gray-50 border-2 border-navy-200 rounded-lg p-4">
        <h3 className="font-bold text-navy-900 mb-2">Scan a QR Code</h3>
        <p className="text-sm text-gray-600 mb-3">
          Found an interesting Stori Vault QR code? Scan it to dive into inspiring financial stories.
        </p>
        <button className="w-full bg-navy-900 text-white py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors text-sm">
          Open Camera
        </button>
      </div>
    </PageContainer>
  );
}
