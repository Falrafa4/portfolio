import { NavLink } from 'react-router';
import { Home, Briefcase, Award, Star, Mail, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/certificates', label: 'Certificates', icon: Award },
  { path: '/achievements', label: 'Achievements', icon: Star },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ className = '', onNavigate }) {
  return (
    <div className={clsx("w-64 bg-sidebar border-r border-border flex flex-col select-none", className)}>
      <div className="py-2">
        <div className="px-3 py-1.5 flex items-center text-xs font-semibold text-text-muted">
          <ChevronRight size={14} className="mr-1" /> Quick Access
        </div>
        <nav className="flex flex-col px-2 space-y-0.5 mt-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-text-main hover:bg-black/10 dark:hover:bg-white/5"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={16} className={clsx(
                    isActive ? "text-primary" : "text-text-muted"
                  )} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
