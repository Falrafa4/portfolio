import { Minus, Square, X } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import { Link } from "react-router";

export default function TitleBar({ onMenuClick }) {
  return (
    <header className="flex h-10 items-center justify-between border-b border-border bg-transparent px-2 select-none sm:h-11" role="banner">
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
          className="rounded-sm pl-2 text-xs font-medium text-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface md:pl-3"
        >
          naufalrafa.my.id
        </Link>
      </div>

      <div className="flex items-center h-full gap-1">
        <ThemeToggle />

        {/* Window Controls - Decorative */}
        <div className="ml-2 hidden h-full items-center sm:flex" aria-hidden="true">
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/5 dark:active:bg-white/5 text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <Minus size={16} strokeWidth={1.5} />
          </button>
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/5 dark:active:bg-white/5 text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <Square size={14} strokeWidth={1.5} />
          </button>
          <button 
            tabIndex="-1"
            className="h-full px-4 bg-transparent hover:bg-red-500! hover:text-white! active:bg-red-600! active:text-white! text-text-muted transition-colors flex items-center justify-center cursor-default"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
