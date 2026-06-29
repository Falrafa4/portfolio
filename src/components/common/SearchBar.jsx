import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-48 md:w-64 flex-shrink-0">
      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
        <Search size={14} className="text-text-muted" />
      </div>
      <input
        type="text"
        placeholder="Search portfolio"
        className="w-full pl-8 pr-3 py-1 text-sm bg-background border border-border rounded-md text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm placeholder:text-text-muted transition-all"
      />
    </div>
  );
}
