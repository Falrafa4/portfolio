import { NavLink } from "react-router";
import { navItems } from "../../constants/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function BottomNavbar({ isSidebarOpen }) {
  return (
    <motion.nav
      initial={{ y: 60, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      exit={{ y: 60, x: "-50%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 26 }}
      className={clsx(
        "fixed bottom-6 left-1/2 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface/85 dark:bg-surface/65 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/25 select-none",
        isSidebarOpen ? "md:hidden" : "flex"
      )}
      role="navigation"
      aria-label="Bottom dock navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              "group relative flex flex-col items-center justify-center w-11 h-11 rounded-full text-text-muted hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface",
              isActive ? "bg-primary/8 text-primary!" : "hover:bg-black/5 dark:hover:bg-white/5"
            )
          }
        >
          {({ isActive }) => (
            <>
              <item.icon size={18} strokeWidth={1.5} />
              
              {/* Active bar/indicator under the icon, simulating Windows 11 Taskbar active indicator */}
              {isActive && (
                <span className="absolute bottom-1 w-2.5 h-0.5 rounded-full bg-primary" />
              )}

              {/* Minimal Tooltip on Hover */}
              <span className="absolute bottom-14 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-out px-2.5 py-1 rounded-md text-xs font-semibold bg-[#1f2937] text-white border border-[#374151] dark:bg-[#f9fafb] dark:text-[#111827] dark:border-[#e5e7eb] shadow-md whitespace-nowrap">
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </motion.nav>
  );
}
