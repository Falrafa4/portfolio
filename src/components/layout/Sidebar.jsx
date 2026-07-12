import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { navItems } from "../../constants/navigation";

export default function Sidebar({ className = "", onNavigate }) {
  return (
    <aside
      className={clsx(
        "w-64 bg-sidebar/80 dark:bg-sidebar/50 border-r border-border flex flex-col select-none",
        className,
      )}
      aria-label="Explorer sidebar"
    >
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
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-sidebar",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-text-main hover:bg-black/10 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/10",
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    size={16}
                    className={clsx(
                      isActive ? "text-primary" : "text-text-muted",
                    )}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
