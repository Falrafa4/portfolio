export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-pulse select-none" aria-hidden="true">
      {/* Skeleton Header */}
      <div className="border-b border-border pb-4 space-y-3">
        <div className="h-8 w-1/3 bg-border rounded-md"></div>
        <div className="h-4 w-1/2 bg-border rounded-md"></div>
      </div>

      {/* Skeleton Content Rows */}
      <div className="space-y-4">
        <div className="h-32 bg-surface border border-border rounded-xl p-6 flex gap-4">
          <div className="w-20 h-20 bg-border rounded-lg flex-shrink-0"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-5 w-1/4 bg-border rounded-md"></div>
            <div className="h-4 w-3/4 bg-border rounded-md"></div>
            <div className="h-4 w-1/2 bg-border rounded-md"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-surface border border-border rounded-lg overflow-hidden h-64 flex flex-col p-4 space-y-3">
              <div className="aspect-video w-full bg-border rounded-md"></div>
              <div className="h-4 w-2/3 bg-border rounded-md"></div>
              <div className="h-3 w-5/6 bg-border rounded-md"></div>
              <div className="h-3 w-1/2 bg-border rounded-md mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
