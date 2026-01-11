# MoniHub MVP - UI/UX Visual Guide

## Color Reference

```
Navy Blues:
#000080    Main navy (darkest)
#1e3a8a    Dark navy
#3a57b3    Medium blue
#4a70ce    Light blue
#618cda    Lighter blue
#8baee2    Very light blue
#bacfe9    Pale blue
#d4e1f0    Very pale blue

Whites & Grays:
#ffffff    Pure white (backgrounds)
#f7f9fc    Off-white (light backgrounds)
#f3f4f6    Light gray
#e0e7ff    Lavender accent
#d1d5db    Medium gray
#9ca3af    Dark gray (text)
#6b7280    Dark gray (text)
```

## Page Layouts

### HOME PAGE (/)
```
┌─────────────────────────────┐
│  Hero Section (Dark Navy)   │
│  Good Morning, Kela! 👋     │
│  Ready to take control...   │
└─────────────────────────────┘

┌─ Quick Stats ─────────────┐
│ Active | Lessons | Total  │
│ Goals  |  Done   | Saved  │
│   3    |   8    | K2.5k  │
└───────────────────────────┘

┌─ Stori Vault ──────────────┐
│ 📖 Stori Vault | See All → │
│ [Story 1] [Story 2] [S...] │
│ ← horizontal scroll →       │
│ (card: 280px × 380px)      │
└────────────────────────────┘

┌─ Call-to-Action ──────────┐
│ Scan a QR Code            │
│ Found an interesting      │
│ Stori Vault QR code?      │
│ [Open Camera Button]      │
└───────────────────────────┘

┌─ Bottom Nav ──────────────┐
│ Home | Learning | Tracker │
│  ▲   │  Profile    │
│ (underline for active tab) │
└────────────────────────────┘
```

### STORY DETAIL PAGE (/story/:storyId)
```
┌─ Header (Dark Navy) ──────┐
│ ← Back | Story Title      │
└───────────────────────────┘

┌─ Story Image ──────────────┐
│ 📖 (gradient background)   │
└────────────────────────────┘

┌─ Story Content ────────────┐
│ Title: From Street Sales...│
│ [Author Avatar] Author    │
│ Date: 2 weeks ago         │
│                            │
│ Full story text content...│
│ Multiple paragraphs       │
│                            │
│ [Inspired CTA Box]        │
│                            │
│ [Share] [Save]            │
└────────────────────────────┘
```

### LEARNING PAGE (/learning)
```
┌─────────────────────────────┐
│  Learning Hub Header        │
│  📚 Expand knowledge...     │
└─────────────────────────────┘

┌─ Progress Stats ──────────┐
│ Lessons: 6 of 19 | 32%    │
└───────────────────────────┘

┌─ Module 1 ─────────────────┐
│ Budgeting Basics           │
│ 2 of 5 lessons finished    │
│ ▓▓░░░ [Continue] [Preview]│
└────────────────────────────┘

┌─ Expanded Lessons ─────────┐
│ ✓ What is a Budget?       │
│ ✓ The 50/30/20 Rule       │
│ → Tracking Your Spending  │
│   Adjusting Your Budget   │
│   Budget Tools & Apps     │
└────────────────────────────┘

┌─ Featured Section ─────────┐
│ ✨ Featured This Week     │
│ "The 50/30/20 Rule"       │
│ [Start Lesson Button]     │
└────────────────────────────┘

┌─ Achievement Preview ──────┐
│ 🏆 Unlock Badges         │
│ Complete modules...       │
└────────────────────────────┘
```

### TRACKER PAGE (/tracker)
```
┌─────────────────────────────┐
│  Tracker Header             │
│  💰 Track goals & cash...   │
└─────────────────────────────┘

┌─ Summary Stats ────────────┐
│ Income: K(total) | Expense │
│ Goals: K(saved)/K(target) │
│ ▓▓▓▓░░░░ Progress Bar     │
└───────────────────────────┘

┌─ My Goals Section ─────────┐
│ My Goals              [+]  │
│                            │
│ ┌─ Goal Card 1 ────────┐  │
│ │ School Fees      ✎   │  │
│ │ ▓▓▓▓░░ (progress)   │  │
│ │ K3200|K1800|K5000   │  │
│ │ Deadline: 2026-05   │  │
│ └─────────────────────┘  │
│                            │
│ ┌─ Goal Card 2 ────────┐  │
│ │ Emergency Fund       │  │
│ └─────────────────────┘  │
└────────────────────────────┘

┌─ Kina Ledger ──────────────┐
│ Kina Ledger           [Add] │
│                            │
│ [All] [In] [Out] (filters)│
│                            │
│ [500 K] Weekly Allowance   │
│ [-150 K] Groceries        │
│ [200 K] Side Gig Income   │
│                            │
│ (scrollable transaction)   │
└────────────────────────────┘
```

### PROFILE PAGE (/profile)
```
┌─────────────────────────────┐
│  Profile Header             │
│  👤 Manage account...   [⚙] │
└─────────────────────────────┘

┌─ User Info ────────────────┐
│ [Avatar] Kela             │
│          Member since...   │
└───────────────────────────┘

┌─ Total Impact ─────────────┐
│ Total Saved: K5,900        │
│ Achievements: 3 of 8       │
└───────────────────────────┘

┌─ Achievements & Badges ────┐
│ 🏆 Achievements            │
│                            │
│ [✓ Saver] [✓ Reader]      │
│ [✓ Seeker] [🔒 Crusher]   │
│                            │
│ [✓ Streak] [🔒 Expert]    │
│ [🔒 Early] [🔒 Investor]  │
└────────────────────────────┘

┌─ Account Stats ────────────┐
│ Last Login: Today          │
│ Stories Read: 5            │
│ Lessons: 6 of 19          │
│ Active Goals: 3            │
└───────────────────────────┘

┌─ Support ──────────────────┐
│ Need Help?                 │
│ [FAQ] [Contact Us]         │
└───────────────────────────┘

┌─ Logout ───────────────────┐
│ [Logout Button]            │
└────────────────────────────┘
```

### BOTTOM NAVIGATION
```
┌────────────────────────────┐
│  [Home] [Learn] [Track]    │
│    ▲      │        │       │
│    │   [Profile]   │       │
│  (active)                  │
│  underline = active tab    │
└────────────────────────────┘
```

## Component Details

### Story Card (280px × 380px)
```
┌──────────────────────────┐
│  ┌────────────────────┐  │
│  │  📸 (image area)   │  │
│  │  (160px height)    │  │
│  └────────────────────┘  │
│                          │
│  From Street Sales...    │
│  to Shop Owner    [3min] │
│                          │
│  How Maria turned...     │
│  her small street...     │
│                          │
│  ┌──────────────────┐   │
│  │  Read Story →    │   │
│  └──────────────────┘   │
└──────────────────────────┘
```

### Progress Card
```
┌─────────────────────────┐
│ Budgeting Basics   [tag]│
│ 2 of 5 lessons done    │
│ ▓▓░░░ (progress bar)   │
│                        │
│ [Continue] [Preview]   │
└─────────────────────────┘
```

### Goal Card
```
┌──────────────────────────┐
│ School Fees          ✎   │
│ ▓▓▓▓░░░░ (progress)    │
│                        │
│ Saved|Remaining|Target │
│ K3200| K1800  |K5000   │
│                        │
│ Deadline: 2026-05-31  │
└──────────────────────────┘
```

### Badge Item (locked)
```
┌─────────────────┐
│  🏆 (grayscale) │
│  Goal Crusher   │
│  Achieve a goal │
│  (50% opacity)  │
└─────────────────┘
```

### Badge Item (unlocked)
```
┌─────────────────┐
│  💾 (color)     │
│  Consistent...  │
│  7 days saving  │
│  (full opacity) │
└─────────────────┘
```

## Color Usage by Component

**Buttons:**
- Primary CTA: Navy (#1e3a8a) background, white text
- Secondary: Navy border, navy text, light gray background on hover
- Danger: Red border, red text
- Success: Green background

**Text:**
- Headings: Navy (#000080)
- Body: Gray (#4b5563)
- Secondary: Gray-400 (#9ca3af)
- Disabled: Gray-300 (#d1d5db)

**Backgrounds:**
- Header: Navy gradient
- Card: White with gray border
- Page: White
- Highlights: Light gray (#f3f4f6)

**Progress:**
- Filled: Navy (#1e3a8a)
- Empty: Light gray (#e5e7eb)

**Transactions:**
- Income: Green (#10b981)
- Expenses: Red (#ef4444)

## Typography Hierarchy

```
Page Title:      32px, Bold, Navy
Section Title:   24px, Bold, Navy
Card Title:      18px, Bold, Navy
Body Text:       16px, Regular, Gray-700
Meta/Helper:     12px, Regular, Gray-500
Tags/Badges:     12px, Bold, Navy
Buttons:         14px, Medium, varies
```

## Spacing System (4px Grid)

```
xs:  4px    (1 unit)
sm:  8px    (2 units)
md:  16px   (4 units) - DEFAULT
lg:  24px   (6 units)
xl:  32px   (8 units)
2xl: 48px   (12 units)
```

## Touch Target Sizes

- Minimum: 44×44px (buttons, nav)
- Cards: 280-320px wide
- Inputs: 44px height minimum
- Icons: 20-24px
- Padding: 16px (4 units) standard

## Animation & Transitions

```css
/* Standard transitions */
transition-all: 300ms ease-in-out

/* Specific uses */
.hover\:shadow-md    /* Card hover */
.focus\:border-navy  /* Input focus */
.active\:bg-navy     /* Button press */

/* Progress bars */
width: 300ms         /* Smooth width change */
```

## Responsive Breakpoints

```
Mobile:   < 640px  (focus)
Tablet:   640px-768px (tested)
Desktop:  > 768px (not primary target)
```

## Accessibility

- Font sizes: 12px minimum (body)
- Color contrast: Navy on white = high contrast ✓
- Touch targets: 44px minimum ✓
- Focus states: Navy border on inputs ✓
- Icons: Always paired with text labels ✓

---

This guide ensures visual consistency across all pages and components!
