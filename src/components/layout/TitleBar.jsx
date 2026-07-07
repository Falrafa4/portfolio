import { Minus, Square, X } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import { Link } from "react-router";

export default function TitleBar({ onMenuClick }) {
  return (
    <header className="h-10 bg-surface border-b border-border flex items-center justify-between select-none px-2" role="banner">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button - Only visible on small screens */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          aria-label="Open navigation menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <Link
          to="/"
          className="text-xs font-medium text-text-main pl-2 md:pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface rounded-sm"
        >
          naufalrafa.my.id
        </Link>
      </div>

      <div className="flex items-center h-full gap-1">
        <ThemeToggle />

        {/* Window Controls - Decorative */}
        <div className="flex items-center h-full ml-2" aria-hidden="true">
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <Minus size={16} strokeWidth={1.5} />
          </button>
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <Square size={14} strokeWidth={1.5} />
          </button>
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-red-500! hover:text-white! text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
