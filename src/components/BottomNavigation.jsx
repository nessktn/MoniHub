import { Home, GraduationCap, Calculator, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/learning', label: 'Learning', icon: GraduationCap },
    { path: '/tracker', label: 'Tracker', icon: Calculator },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 flex justify-around items-center h-20 z-50">
      {navItems.map(({ path, label, icon: Icon }) => {
        const isActive = currentPath === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive
                ? 'text-navy-900 border-t-4 border-navy-900'
                : 'text-gray-400 hover:text-navy-800'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
