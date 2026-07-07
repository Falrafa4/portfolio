import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Sidebar from '../layout/Sidebar';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-border md:hidden flex flex-col"
          >
            <div className="h-10 flex items-center justify-between px-4 border-b border-border bg-surface">
              <span className="text-sm font-semibold text-text-main">
                Navigation
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-text-muted transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar className="w-full border-r-0" onNavigate={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
