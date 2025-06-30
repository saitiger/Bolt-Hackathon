import React from 'react';
import { Menu, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  onBackToLanding: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onBackToLanding }) => {
  return (
    <header className="flex md:hidden items-center justify-between px-4 py-3 border-b border-white/10 backdrop-blur-lg sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={onBackToLanding}
          className="p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Back to landing"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold tracking-tight">Recipe Finder</h2>
      </div>
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-md hover:bg-white/10 transition"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;