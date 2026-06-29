import { X } from 'lucide-react';
import clsx from 'clsx';
import Sidebar from '../layout/Sidebar';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div 
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-border transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-10 flex items-center justify-between px-4 border-b border-border bg-surface">
          <span className="text-sm font-semibold text-text-main">Navigation</span>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/5 text-text-muted"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Sidebar className="w-full border-r-0" onNavigate={onClose} />
        </div>
      </div>
    </>
  );
}
