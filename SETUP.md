# MoniHub Setup & Development Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

---

## Project Files Overview

### Root Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite bundler config
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins
- `index.html` - HTML entry point

### Source Files (src/)

#### Components (`src/components/`)
- **BottomNavigation.jsx** - Fixed bottom nav bar with 4 tabs
- **StoryCard.jsx** - Story preview card for Stori Vault
- **ProgressCard.jsx** - Learning module progress display
- **GoalCard.jsx** - Savings goal card
- **BadgeItem.jsx** - Achievement badge display
- **PageContainer.jsx** - Page wrapper with proper mobile padding
- **GoalModal.jsx** - Modal for creating/editing goals

#### Pages (`src/pages/`)
- **HomePage.jsx** - Hero + Stori Vault (main entry point)
- **LearningPage.jsx** - Learning modules and lessons
- **TrackerPage.jsx** - Goals and Kina ledger
- **ProfilePage.jsx** - User profile and achievements
- **StoryPage.jsx** - Individual story detail view (deep-linkable)

#### Core Files
- **App.jsx** - Main router and layout
- **main.jsx** - React DOM entry point
- **index.css** - Global styles and Tailwind directives

---

## Navigation Structure

```
Home (/)
  ↓
Stori Vault (scrollable stories)
  ↓ (click story)
Story Detail (/story/:storyId)
  ↓ (back)
Home

Bottom Tabs:
- Home (/)
- Learning (/learning)
- Tracker (/tracker)
- Profile (/profile)
```

---

## Key Features Implemented

### ✅ Home Page
- Hero section with personalized greeting
- Quick stats boxes (goals, lessons, savings)
- Horizontal scrolling Stori Vault with 5 sample stories
- QR code scanning CTA

### ✅ Stori Vault
- 5 pre-written stories with full narratives
- Deep linkable via `/story/:storyId`
- Back button navigation
- Share and save buttons
- Call-to-action to learning modules

### ✅ Learning Hub
- 4 modules with expandable lessons
- Progress tracking (6 of 19 lessons completed)
- Lesson duration display
- Featured lesson section
- Achievement unlock message

### ✅ Kina Tracker
- Goal creation/editing with modal
- Visual progress bars for goals
- Complete transaction ledger
- Cash In / Cash Out transaction logging
- Summary stats (income, expenses, savings progress)
- Transaction filtering

### ✅ Profile
- User profile with avatar
- 8 achievement badges (some locked, some unlocked)
- Total impact stats (K5,900 saved, 3/8 achievements)
- Account settings with modal
- Activity summary
- Support section
- Logout button

### ✅ Bottom Navigation
- 4 fixed tabs: Home, Learning, Tracker, Profile
- Active state highlighting
- Responsive icons
- Touch-friendly design

---

## Styling Guide

### Color System
```css
/* Navy Blues */
#000080       - Darkest navy (primary)
#1e3a8a       - Dark blue
#3a57b3       - Medium blue
#4a70ce       - Lighter blue
#618cda       - Light blue
#8baee2       - Very light blue

/* Whites & Grays */
#ffffff       - Pure white
#f7f9fc       - Very light gray-blue
#f3f4f6       - Light gray
#d4e1f0       - Medium gray-blue
#e0e7ff       - Lavender
#d1d5db       - Medium gray
```

### Component Styling Conventions
- Navy backgrounds: `.bg-navy-900`
- Navy text: `.text-navy-900`
- Navy borders: `.border-navy-900`
- Light backgrounds: `.bg-navy-50`
- Button hover: `.hover:bg-navy-800`

---

## Adding Mock Data

### Stories (`src/pages/StoryPage.jsx`)
```javascript
const STORY_DETAILS = {
  'story-id': {
    title: 'Story Title',
    author: 'Author Name',
    date: '2 weeks ago',
    content: 'Full story text...',
    image: null,
  }
}
```

### Learning Modules (`src/pages/LearningPage.jsx`)
```javascript
const MODULES = [
  {
    id: 'module-id',
    category: 'Category',
    title: 'Module Title',
    completed: 2,
    total: 5,
  }
]
```

### Goals & Transactions (`src/pages/TrackerPage.jsx`)
```javascript
const MOCK_GOALS = [
  {
    id: 1,
    title: 'Goal Title',
    targetAmount: 5000,
    currentAmount: 3200,
    deadline: '2026-05-31',
  }
]
```

---

## Component API

### StoryCard Props
```jsx
<StoryCard
  id="story-1"
  photo={null}
  title="Story Title"
  duration="3 min read"
  excerpt="Brief excerpt..."
  onSelect={(id) => handleClick(id)}
/>
```

### ProgressCard Props
```jsx
<ProgressCard
  title="Module Title"
  completed={2}
  total={5}
  category="Category"
/>
```

### GoalCard Props
```jsx
<GoalCard
  id={1}
  title="Goal Title"
  targetAmount={5000}
  currentAmount={3200}
  deadline="2026-05-31"
  onEdit={(id) => handleEdit(id)}
/>
```

### BadgeItem Props
```jsx
<BadgeItem
  icon="🏆"
  title="Badge Title"
  description="Badge description"
  unlocked={true}
/>
```

---

## Responsive Design

The app is built mobile-first:
- Default viewport: 375px (iPhone SE)
- Tested up to: 768px (iPad)
- No desktop layout (mobile app)

### Touch Considerations
- Buttons: 44x44px minimum
- Padding: Generous for mobile thumbs
- No hover states (mobile-first CSS)
- Smooth scrolling (no scrollbars)

---

## Future Development Steps

1. **Backend Integration**
   - Replace mock data with API calls
   - Add authentication (login/signup)
   - Store goals and transactions in database

2. **Camera Integration**
   - Implement QR code scanning
   - Parse QR data to deep-link stories

3. **Progressive Web App**
   - Add offline support
   - Install as native app icon
   - Service workers for caching

4. **Notifications**
   - Goal milestone alerts
   - Lesson recommendations
   - Weekly summary emails

5. **Advanced Features**
   - Social features (share achievements)
   - Leaderboards
   - Mentor connections
   - Video lessons
   - Mobile money integration (bmobile, digicel)

---

## Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 5173
npm run dev -- --port 5174
```

### Tailwind Styles Not Loading
- Ensure `index.css` is imported in `main.jsx`
- Check `tailwind.config.js` content paths
- Clear browser cache: `Ctrl+Shift+Delete`

### Components Not Rendering
- Check console for errors
- Verify all imports are correct
- Ensure component names match file names

---

## Performance Tips

1. **Lazy Load Images**: Replace placeholder emojis with real images
2. **Code Splitting**: Implement React.lazy() for pages
3. **Memoization**: Use React.memo() for cards if lists get large
4. **Bundle Size**: Monitor with `npm run build`

---

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:5173` in your mobile browser
4. Test all 4 main tabs
5. Click through stories and verify deep-linking works
6. Try creating goals and adding transactions
7. Build for production when ready: `npm run build`

Happy coding! 🚀
