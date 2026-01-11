import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BottomNavigation } from './components/BottomNavigation';
import { HomePage } from './pages/HomePage';
import { LearningPage } from './pages/LearningPage';
import { TrackerPage } from './pages/TrackerPage';
import { ProfilePage } from './pages/ProfilePage';
import { StoryPage } from './pages/StoryPage';
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="w-full h-screen bg-white flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Bottom Navigation - Only show on main pages, not on story pages */}
        <Routes>
          <Route path="/story/:storyId" element={null} />
          <Route path="*" element={<BottomNavigation />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
