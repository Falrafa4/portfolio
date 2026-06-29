import { useState } from 'react';
import { Outlet } from 'react-router';
import TitleBar from '../components/layout/TitleBar';
import Toolbar from '../components/layout/Toolbar';
import Sidebar from '../components/layout/Sidebar';
import StatusBar from '../components/layout/StatusBar';
import MobileDrawer from '../components/navigation/MobileDrawer';

export default function ExplorerLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-text-main font-sans selection:bg-primary/20">
      <TitleBar onMenuClick={() => setIsMobileMenuOpen(true)} />
      <Toolbar />
      
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar className="hidden md:flex" />
        <MobileDrawer 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-surface/50">
          <div className="py-10 px-6 max-w-6xl mx-auto min-h-full">
            <Outlet />
          </div>
        </div>
      </div>
      
      {/* Assuming 5 static items for now until data is connected */}
      <StatusBar itemCount={5} />
    </div>
  );
}
