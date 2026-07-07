import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import Breadcrumb from "../common/Breadcrumb";
import SearchBar from "../common/SearchBar";

export default function Toolbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-12 bg-surface border-b border-border flex justify-between items-center px-2 gap-2 md:gap-4 select-none">
      <div className="flex items-center gap-0.5 md:gap-1">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-text-main disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          aria-label="Go back"
          disabled={location.key === "default"}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => navigate(1)}
          className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-text-main disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          aria-label="Go forward"
        >
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => window.location.reload()}
          className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-text-main transition-colors hidden sm:block"
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
