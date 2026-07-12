export default function StatusBar({ itemCount = 0 }) {
  return (
    <footer className="h-8 bg-transparent border-t border-border flex items-center px-4 select-none" role="contentinfo" aria-label="Status bar">
      <span className="text-xs text-text-muted">
        {itemCount} item{itemCount !== 1 ? 's' : ''}
      </span>
      
      {/* Decorative separator */}
      <div className="mx-4 h-4 w-px bg-border"></div>
      
      <span className="text-xs text-text-muted flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        Ready
      </span>
    </footer>
  );
}
