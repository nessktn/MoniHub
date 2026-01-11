# MoniHub - Financial Literacy Hub for PNG Youth

A mobile-first React MVP designed to empower young people in Papua New Guinea with financial literacy tools, educational content, and goal tracking capabilities.

## Empowering PNG Youth Through Financial Literacy

MoniHub is a financial literacy education hub designed to bridge the gap between traditional cultural financial practices and the modern digital economy. Built specifically for youth in Papua New Guinea, MoniHub transforms financial education into an engaging, culturally-relevant, and aspirational experience—empowering the next generation to build sustainable financial futures.

---

## Design System

### Color Palette

- **Primary Navy Blue**: `#000080` / `#1e3a8a` - Trust and professionalism
- **Secondary White**: `#ffffff` - Cleanliness and clarity
- **Accent Light Gray**: `#f3f4f6` - Subtle backgrounds and borders

### Typography & Layout

- Clean, modern interface with high-contrast text for readability
- Touch-friendly buttons and interactive elements
- Mobile-first responsive design
- No visible scrollbars (smooth scrolling experience)

---

## Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom Navy Blue color palette
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useContext ready)

---

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BottomNavigation.jsx
│   ├── StoryCard.jsx
│   ├── ProgressCard.jsx
│   ├── GoalCard.jsx
│   ├── BadgeItem.jsx
│   ├── PageContainer.jsx
│   └── GoalModal.jsx
├── pages/                # Full page components
│   ├── HomePage.jsx      # Hero + Stori Vault
│   ├── LearningPage.jsx  # Learning modules
│   ├── TrackerPage.jsx   # Goals + Ledger
│   ├── ProfilePage.jsx   # Profile + Achievements
│   └── StoryPage.jsx     # Individual story detail
├── App.jsx               # Main router
├── main.jsx              # React DOM mount
└── index.css             # Global Tailwind styles
```

---

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MoniHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app is optimized for mobile viewports (375px - 768px)

### Build for Production

```bash
npm run build
npm run preview
```

---

## Features Breakdown

### 1. **Home Page (The Entry Point)**

- **Hero Section**: Personalized greeting with user's name
- **Quick Stats**: Active goals, lessons completed, total saved
- **Stori Vault**: Horizontal scrolling feed of inspirational stories
- **QR Code Scanner**: Call-to-action for scanning physical QR codes
- **Deep Linking**: Each story is accessible via `/story/:storyId`

### 2. **Learning Hub**

- **Module Library**: Organized by Budgeting, Saving, and Investing
- **Progress Cards**: Visual representation of lesson completion
- **Expandable Lessons**: Click to see individual lessons within each module
- **Featured Lesson**: Weekly highlighted content
- **Achievement Tracking**: Badges unlock when modules are completed

### 3. **Kina Tracker**

- **Goal Management**: Create, edit, and monitor savings goals
- **Visual Progress**: Progress bars and remaining balance calculations
- **Kina Ledger**: Log cash in/out transactions
- **Transaction Filters**: View all, income only, or expenses only
- **Summary Stats**: Quick view of total income, expenses, and progress

### 4. **Profile & Achievements**

- **User Profile**: Avatar, name, join date
- **Total Impact**: Aggregate savings and achievement count
- **Badges Grid**: 8 different achievements to unlock
- **Account Activity**: Last login, stories read, lessons done, goals
- **Settings**: Update profile info and notification preferences

---

## Component Details

### StoryCard
Displays individual story previews with image, title, read duration, and excerpt.

### ProgressCard
Shows lesson/module progress with a visual progress bar and action buttons.

### GoalCard
Displays savings goal with progress bar, current/target amounts, and deadline.

### BadgeItem
Shows achievement badges with locked/unlocked states.

### GoalModal
Modal form for creating/editing savings goals.

### BottomNavigation
Fixed bottom navigation with 4 main tabs: Home, Learning, Tracker, Profile.

---

## Deep Linking for QR Codes

Each story can be accessed directly via:
```
https://monihub.app/story/story-1
https://monihub.app/story/story-2
```

QR codes can be generated pointing to these URLs, allowing physical-world integration with the digital app.

---

## Mock Data

The app includes mock data for:
- 5 sample stories with full narratives
- 4 learning modules with 15+ lessons
- 3 sample savings goals
- 6 mock transactions
- 8 achievement badges

Replace mock data with API calls to a backend service when ready.

---

## Future Enhancements

- [ ] User authentication and backend integration
- [ ] Real QR code scanning with camera API
- [ ] Push notifications for goal milestones
- [ ] Social features (share stories, compete with friends)
- [ ] Offline capability (PWA)
- [ ] Multi-language support
- [ ] Analytics dashboard for educators
- [ ] Integration with mobile money services (bmobile, digicel)
- [ ] Video content for lessons
- [ ] Mentor/coach connections

---

## Design Philosophy

**Professional yet Approachable**: Navy blue conveys trust and stability while white keeps the interface clean and modern.

**Mobile-First**: Optimized for phone users with large touch targets and minimal friction.

**Culturally Respectful**: Content acknowledges PNG cultural values while introducing modern financial concepts.

**Gamified Learning**: Progress bars, badges, and achievement unlock psychological wins to maintain engagement.

**Deep-Linkable**: Every important page (especially stories) can be shared via URL or QR code.

---

## Support & Contact

For issues, feature requests, or inquiries, please contact the development team.

---

**Let's build financial empowerment for PNG youth! 🇵🇬💰**
