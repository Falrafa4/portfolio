import { useState, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';
import TitleBar from '../components/layout/TitleBar';
import Toolbar from '../components/layout/Toolbar';
import Sidebar from '../components/layout/Sidebar';
import StatusBar from '../components/layout/StatusBar';
import MobileDrawer from '../components/navigation/MobileDrawer';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import BottomNavbar from '../components/navigation/BottomNavbar';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function ExplorerLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return localStorage.getItem('sidebar_open') === 'true';
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const next = !prev;
      localStorage.setItem('sidebar_open', String(next));
      return next;
    });
  };

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* Background Wallpaper for Mica Effect Simulation */}
      <div 
        className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none bg-[#f1f5f9] dark:bg-[#090d16]"
        aria-hidden="true"
      >
        {/* Ambient mesh gradient simulating Windows 11 wallpaper bloom (monochromatic navy/soft blue) */}
        <div className="absolute inset-0 bg-linear-to-tr from-[#e2e8f0] via-[#e2e8f0]/40 to-[#dbeafe] dark:from-[#0b1329] dark:via-[#0f172a] dark:to-[#1e293b] transition-colors duration-500" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#3b82f6]/8 dark:bg-[#1d4ed8]/12 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1d4ed8]/5 dark:bg-[#3b82f6]/8 blur-[150px]" />
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.012] dark:opacity-[0.018]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        aria-hidden="true"
      />

      {/* Explorer Window container with Mica translucent backdrop-blur */}
      <div className="flex flex-col h-full bg-background/85 dark:bg-background/90 backdrop-blur-xl text-text-main font-sans selection:bg-primary/20">
        <TitleBar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <Toolbar isSidebarOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
        
        <div className="flex flex-1 overflow-hidden relative">
          <Sidebar className={clsx("hidden", isSidebarOpen ? "md:flex" : "md:hidden")} />
          <MobileDrawer 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-surface/60 dark:bg-surface/40" id="main-content">
            <div className="py-10 px-6 max-w-6xl mx-auto min-h-full">
              <Suspense fallback={<LoadingSkeleton />}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
        
        <StatusBar itemCount={5} />
      </div>

      {/* Floating Bottom Taskbar Navigation (Always visible on mobile, togglable on desktop) */}
      <AnimatePresence>
        {(!isSidebarOpen || isMobile) && (
          <BottomNavbar isSidebarOpen={isSidebarOpen} />
        )}
      </AnimatePresence>
    </div>
  );
}
