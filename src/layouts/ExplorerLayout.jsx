import { Outlet } from 'react-router';

export default function ExplorerLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-text-main">
      {/* Title Bar Placeholder */}
      <div className="h-10 bg-surface border-b border-border flex items-center px-4">
        <span className="text-sm font-semibold">Windows Explorer Portfolio</span>
      </div>
      
      {/* Toolbar Placeholder */}
      <div className="h-12 bg-surface border-b border-border flex items-center px-4">
        <span className="text-sm text-text-muted">Toolbar Placeholder</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Placeholder */}
        <div className="w-64 bg-sidebar border-r border-border hidden md:block p-4">
          <span className="text-sm text-text-muted">Sidebar Placeholder</span>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>

      {/* Status Bar Placeholder */}
      <div className="h-8 bg-surface border-t border-border flex items-center px-4">
        <span className="text-xs text-text-muted">Status Bar Placeholder</span>
      </div>
    </div>
  );
}
