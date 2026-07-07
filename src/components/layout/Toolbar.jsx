import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import Breadcrumb from "../common/Breadcrumb";
import SearchBar from "../common/SearchBar";

export default function Toolbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-12 bg-surface border-b border-border flex justify-between items-center px-2 gap-2 md:gap-4 select-none" role="toolbar" aria-label="Explorer toolbar">
      <div className="flex items-center gap-0.5 md:gap-1">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-text-main disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface"
          aria-label="Go back"
          disabled={location.key === "default"}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => navigate(1)}
          className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-text-main disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface"
          aria-label="Go forward"
        >
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => window.location.reload()}
          className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-text-main transition-colors hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-surface"
          aria-label="Refresh"
        >
          <RotateCw size={16} strokeWidth={1.5} />
        </button>
      </div>

      <Breadcrumb />

      <SearchBar />
    </div>
  );
}
