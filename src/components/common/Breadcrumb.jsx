import { useLocation, Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex-1 flex items-center border border-border rounded-md bg-background px-3 py-1 text-sm text-text-muted shadow-sm min-w-0">
      <Link
        to="/"
        className="hover:bg-black/5 dark:hover:bg-white/5 p-1 rounded transition-colors flex items-center"
      >
        <Home size={14} />
      </Link>
      <ChevronRight size={14} className="mx-1 opacity-50 flex-shrink-0" />

      <div className="flex items-center overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
        <Link
          to="/"
          className="hover:bg-black/5 dark:hover:bg-white/5 px-1.5 py-0.5 rounded transition-colors text-text-main"
        >
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label =
            value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");

          return (
            <div key={to} className="flex items-center">
              <ChevronRight
                size={14}
                className="mx-1 opacity-50 flex-shrink-0"
              />
              {isLast ? (
                <span className="px-1.5 py-0.5 text-text-main font-medium truncate">
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:bg-black/5 dark:hover:bg-white/5 px-1.5 py-0.5 rounded transition-colors text-text-main truncate"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
