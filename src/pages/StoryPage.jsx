import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const STORY_DETAILS = {
  'story-1': {
    title: 'From Street Sales to Shop Owner',
    author: 'Maria Santos',
    date: '2 weeks ago',
    content: `Maria started with just K200 and a dream. Every morning, she would wake up at 5 AM to buy fresh vegetables from the local market and sell them on the streets of Port Moresby.

For two years, she worked tirelessly, saving every kina she could. She kept a detailed ledger of her income and expenses, never spending more than she earned. Her customers loved her dedication and reliability.

By year three, Maria had saved K15,000. She made the bold decision to invest in a small retail shop. With careful planning and smart investments in inventory, her shop became a neighborhood favorite.

Today, Maria runs a successful retail business with 5 employees and plans to expand to another location next year. She attributes her success to three things: consistency, financial discipline, and community trust.

"Financial freedom isn't about getting rich quick," Maria says. "It's about making smart decisions every single day and staying committed to your goals."`,
    image: null,
  },
  'story-2': {
    title: 'Building Wealth Through Savings',
    author: 'John Warupi',
    date: '1 month ago',
    content: `John earned a modest income as a teacher, bringing home K1,800 every month. He felt stuck - enough to survive but never enough to get ahead.

Everything changed when he attended a financial literacy workshop. The key insight: he didn't need to earn more; he needed to spend less deliberately.

John created a simple budget: 50% for essentials, 30% for living expenses, and 20% for savings. He stuck to it religiously. Within 18 months, he had saved K15,000 from his salary alone.

But John didn't stop there. He used part of his savings to start a small tutoring side business, which added another K500 monthly to his income. By reinvesting his tutoring income back into savings, his wealth grew exponentially.

In just 18 months, John went from K0 to K50,000 in savings. Today, he's planning his first investment property and mentoring other teachers on financial management.

"The secret isn't complicated," John reflects. "It's about knowing where your money goes and making intentional choices."`,
    image: null,
  },
  'story-3': {
    title: 'First Investment Success',
    author: 'Amara Liko',
    date: '1 month ago',
    content: `For years, Amara saved money but kept it under her mattress. She knew about investments but was terrified of losing money.

When she heard about a local women's business cooperative focused on handicrafts, something clicked. She did her research, talked to the cooperative leaders, and made the leap: she invested K5,000.

In the first year, the cooperative had challenges but stayed committed to its mission. Amara remained patient and supportive. By year two, the cooperative's business grew significantly, and Amara received her first dividend: K2,500.

By year three, her total returns had reached K10,000 - she had literally doubled her money. More importantly, Amara had discovered the power of patience and smart investing.

"I was so scared to invest," Amara admits. "But I realized that keeping money under the mattress meant I was actually losing money to inflation. Investing taught me that calculated risks are sometimes the smartest choice."

Today, Amara has diversified her investments across three different cooperative ventures and continues to see steady growth.`,
    image: null,
  },
  'story-4': {
    title: 'Breaking the Paycheck-to-Paycheck Cycle',
    author: 'Grace Kuma',
    date: '6 weeks ago',
    content: `Grace was earning good money as a bank officer but lived from paycheck to paycheck. By the end of each month, her account would be nearly empty, and she'd feel anxious about unexpected expenses.

She realized she had an income problem disguised as a spending problem. She started tracking every kina she spent for three months. The results were eye-opening.

Grace was spending K400 monthly on subscriptions she barely used, K300 on impulse food purchases, and K200 on unnecessary personal items. That was K900 monthly - K10,800 yearly!

She cut these expenses and redirected the money to an emergency fund. Within 12 months, she had K12,000 set aside for emergencies. This single change transformed her mindset from scarcity to abundance.

"I wasn't making bad money," Grace explains. "I was making bad decisions with good money. Once I took control of my spending, everything changed."

Grace now has a six-month emergency fund, has started investing in her retirement, and sleeps peacefully knowing that unexpected expenses won't derail her financial future.`,
    image: null,
  },
  'story-5': {
    title: 'Entrepreneurship in Rural PNG',
    author: 'David Mori',
    date: '2 months ago',
    content: `In a small village outside Goroka, David started a small agricultural business growing coffee and cocoa. For years, he struggled with inconsistent income and couldn't plan for the future.

A visiting financial educator showed him how to track his agricultural yields, costs, and profits. For the first time, David understood the true profitability of his business.

Armed with this knowledge, David made strategic investments: better seeds, improved farming techniques, and a small storage facility. He also started saving the surplus from good harvest seasons.

Over five years, David's farm income grew from K2,000 annually to K12,000. He was able to send his children to secondary school and build a proper house.

The biggest lesson David learned: financial planning isn't just for city folks with salary jobs. Rural entrepreneurs benefit equally from understanding their numbers and making intentional decisions.

"I always thought I was too far from the city to succeed in business," David reflects. "But financial discipline works anywhere. It's about knowing your numbers and making decisions based on facts, not feelings."

David now mentors other farmers in his region on financial management and business planning.`,
    image: null,
  },
};

export function StoryPage() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const story = STORY_DETAILS[storyId];

  if (!story) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-600">Story not found</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="bg-navy-900 text-white sticky top-0 z-40">
        <div className="flex items-center gap-4 p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-navy-800 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">Story</h1>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-2xl mx-auto">
        {/* Story Image */}
        <div className="w-full h-64 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center text-6xl">
          {story.image ? (
            <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          ) : (
            '📖'
          )}
        </div>

        {/* Story Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">{story.title}</h2>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <p className="font-semibold text-navy-900">{story.author}</p>
              <p className="text-sm text-gray-600">{story.date}</p>
            </div>
          </div>

          {/* Story Body */}
          <div className="prose prose-sm max-w-none">
            {story.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="mt-8 p-4 bg-navy-50 border-2 border-navy-200 rounded-lg">
            <h3 className="font-bold text-navy-900 mb-2">Inspired?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Start your own financial journey today with our learning modules and goal tracking tools.
            </p>
            <button
              onClick={() => navigate('/learning')}
              className="w-full bg-navy-900 text-white py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              Explore Learning Modules
            </button>
          </div>

          {/* Share Section */}
          <div className="mt-6 flex gap-2">
            <button className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium hover:bg-navy-50 transition-colors text-sm">
              Share
            </button>
            <button className="flex-1 border-2 border-navy-900 text-navy-900 py-2 rounded-lg font-medium hover:bg-navy-50 transition-colors text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
