import { FolderOpen } from 'lucide-react';

export default function EmptyState({ title = 'No items found', message = 'Try refining your search term or filter.', actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center select-none animate-fade-in">
      <div className="p-4 bg-background border border-border rounded-full text-text-muted mb-4 shadow-inner">
        <FolderOpen size={48} className="stroke-[1.25] opacity-80" />
      </div>
      <h3 className="text-lg font-semibold text-text-main mb-2">{title}</h3>
      <p className="text-sm text-text-muted max-w-sm mb-6 leading-relaxed">{message}</p>
      
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background hover:cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
