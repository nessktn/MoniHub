# ⚡ MoniHub - Quick Reference Card

## 🚀 Start Here

```bash
npm install
npm run dev
# Open http://localhost:5173
```

---

## 📍 Routes Map

| Route | Page | Features |
|-------|------|----------|
| `/` | Home | Hero + Stori Vault |
| `/learning` | Learning | 4 modules, 19 lessons |
| `/tracker` | Tracker | Goals + ledger |
| `/profile` | Profile | Profile + badges |
| `/story/:storyId` | Story | Deep-linkable stories |

---

## 🎨 Colors (Copy & Paste)

```css
/* Navy Blues */
#000080    /* Primary navy */
#1e3a8a    /* Dark navy */
#3a57b3    /* Medium blue */
#4a70ce    /* Light blue */
#618cda    /* Lighter blue */
#8baee2    /* Very light blue */
#bacfe9    /* Pale blue */
#d4e1f0    /* Very pale blue */

/* Supporting */
#ffffff    /* White */
#f3f4f6    /* Light gray */
#e0e7ff    /* Lavender */
```

---

## 📦 Main Components

```jsx
// Import components
import {
  BottomNavigation,
  StoryCard,
  ProgressCard,
  GoalCard,
  BadgeItem,
  PageContainer,
  GoalModal
} from '@/components'
```

### Component Snippets

**StoryCard**
```jsx
<StoryCard
  id="story-1"
  title="Story Title"
  duration="3 min"
  excerpt="Brief text..."
  onSelect={(id) => navigate(`/story/${id}`)}
/>
```

**ProgressCard**
```jsx
<ProgressCard
  title="Module Title"
  category="Category"
  completed={2}
  total={5}
/>
```

**GoalCard**
```jsx
<GoalCard
  id={1}
  title="School Fees"
  targetAmount={5000}
  currentAmount={3200}
  deadline="2026-05-31"
  onEdit={handleEdit}
/>
```

---

## 📝 Mock Data Quick Add

### Add Story
Edit `src/pages/StoryPage.jsx`:
```javascript
const STORY_DETAILS = {
  'story-6': {
    title: 'New Story',
    author: 'Author Name',
    date: 'recently',
    content: 'Story content...',
    image: null,
  }
}
```

### Add Goal
Edit `src/pages/TrackerPage.jsx`:
```javascript
const MOCK_GOALS = [
  ...existing,
  {
    id: 4,
    title: 'New Goal',
    targetAmount: 1000,
    currentAmount: 0,
    deadline: '2026-12-31',
  }
]
```

### Add Lesson
Edit `src/pages/LearningPage.jsx`:
```javascript
const LESSON_BREAKDOWN = {
  budgeting: [
    ...existing,
    { name: 'New Lesson', duration: '5 min' }
  ]
}
```

---

## 🎯 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/App.jsx` | Change routes |
| `src/index.css` | Global styles |
| `tailwind.config.js` | Colors & theme |
| `src/pages/HomePage.jsx` | Home content |
| `src/pages/StoryPage.jsx` | Stories |
| `src/pages/LearningPage.jsx` | Lessons |
| `src/pages/TrackerPage.jsx` | Goals |
| `src/pages/ProfilePage.jsx` | Badges |

---

## 🔧 Common Edits

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
navy: {
  900: '#YOUR_COLOR_HERE'
}
```

### Change App Title
Edit `index.html`:
```html
<title>Your App Name</title>
```

### Hide Bottom Nav
Edit `src/App.jsx`:
```jsx
// Already handles story page!
// Add more exceptions here
```

### Customize Hero Text
Edit `src/pages/HomePage.jsx`:
```javascript
const [userName] = useState('Your Name');
```

---

## 📚 Documentation Map

```
README.md                    ← START HERE (overview)
  ↓
SETUP.md                     ← Installation
  ↓
FEATURE_TOUR.md              ← Visual walkthrough
  ↓
PROJECT_SUMMARY.md           ← Complete features
  ↓
UI_GUIDE.md                  ← Design system
  ↓
IMPLEMENTATION_CHECKLIST.md  ← What's done
  ↓
README_NEW.md                ← Technical deep-dive
```

---

## 🎨 Tailwind Utilities

### Common Classes
```css
.bg-navy-900        /* Dark navy background */
.text-navy-900      /* Navy text */
.border-navy-900    /* Navy border */
.hover:bg-navy-800  /* Hover state */

.bg-white           /* White background */
.text-gray-600      /* Gray text */

.rounded-lg         /* Rounded corners */
.shadow-md          /* Box shadow */
.transition-all     /* Smooth transitions */

.px-4 py-2          /* Padding */
.gap-2              /* Gap between items */
.grid grid-cols-2   /* 2-column grid */
```

---

## 🚀 Commands

```bash
# Development
npm run dev           # Start dev server (port 5173)

# Production
npm run build         # Create optimized build
npm run preview       # Preview production build

# Utilities
npm install          # Install dependencies
npm update           # Update dependencies
npm audit            # Check for vulnerabilities
```

---

## 🔗 Deep Links

Create these URLs:
```
/story/story-1    → From Street Sales to Shop Owner
/story/story-2    → Building Wealth Through Savings
/story/story-3    → First Investment Success
/story/story-4    → Breaking the Paycheck-to-Paycheck
/story/story-5    → Entrepreneurship in Rural PNG
```

Generate QR codes for these URLs!

---

## 📊 Stats

| Metric | Value |
|--------|-------|
| Components | 7 reusable |
| Pages | 5 |
| Stories | 5 |
| Lessons | 19 |
| Modules | 4 |
| Badges | 8 |
| Routes | 6+ |
| Colors | 14+ |
| Icons | 10+ |

---

## 💡 Quick Tips

✅ Use `useState` for simple state
✅ Use components from `src/components/`
✅ Edit mock data in pages directly
✅ Tailwind classes for styling
✅ React Router for navigation
✅ Lucide icons for SVGs

❌ Don't hardcode colors (use Tailwind)
❌ Don't create new components in pages
❌ Don't modify package.json without need
❌ Don't remove CSS classes without testing
❌ Don't skip the docs

---

## 🐛 Troubleshooting

**Port in use?**
```bash
npm run dev -- --port 5174
```

**Styles not loading?**
- Clear cache: Ctrl+Shift+Delete
- Restart dev server
- Check `index.css` import

**Routes not working?**
- Check `App.jsx` route definitions
- Verify component imports
- Check spelling of route paths

**Components not showing?**
- Check browser console for errors
- Verify component imports
- Check props passed to components

---

## 📱 Testing Checklist

- [ ] All 4 nav tabs work
- [ ] Story cards are clickable
- [ ] Story detail page loads
- [ ] Back button returns home
- [ ] Deep links work (/story/story-1)
- [ ] Goals can be created
- [ ] Goals can be edited
- [ ] Goals can be deleted
- [ ] Transactions can be logged
- [ ] Transactions filter correctly
- [ ] Profile settings open/close
- [ ] Badges display correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Touch-friendly buttons

---

## 🎓 Next Level

### Learn More
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [React Router Docs](https://reactrouter.com/)

### Add Features
- Backend API
- Authentication
- Database
- QR scanning
- Push notifications

### Deploy
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Firebase](https://firebase.google.com/)

---

## 🎯 Your MVP Checklist

✅ Project created
✅ All pages built
✅ All components created
✅ Navigation working
✅ Mock data added
✅ Styling applied
✅ Documentation written
✅ Ready to use
→ Ready to deploy!

---

## 🚀 Deploy in 3 Steps

```bash
# 1. Build
npm run build

# 2. Deploy to Vercel
npm install -g vercel
vercel

# 3. Done! Share the link
```

---

**Last Updated**: January 11, 2026
**Status**: Production Ready ✅
**Ready to Ship**: YES 🚀

Start building! 🎉
