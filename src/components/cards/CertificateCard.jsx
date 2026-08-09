import { ExternalLink, Calendar, Award, Download } from 'lucide-react';

export default function CertificateCard({ certificate }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDownloadUrl = (url) => {
    if (!url) return null;
    
    // Check if it's a Google Drive link
    if (url.includes('drive.google.com')) {
      let fileId = null;
      
      // Match /file/d/FILE_ID/...
      const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        fileId = fileIdMatch[1];
      } else {
        // Match ?id=FILE_ID
        const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (idMatch && idMatch[1]) {
          fileId = idMatch[1];
        }
      }

      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    
    return url; // Return original if not matched
  };

  const downloadUrl = getDownloadUrl(certificate.pdfUrl);

  return (
    <div className="group relative flex flex-col overflow-hidden border-2 border-dashed border-border bg-surface/80 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/50 active:scale-[0.99] after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-br after:from-primary/10 after:via-transparent after:to-primary/5 after:opacity-0 hover:after:opacity-100 active:after:opacity-100 after:transition-opacity after:duration-300 select-none">
      {/* Thumbnail or Fallback Icon */}
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border/70 bg-background flex items-center justify-center">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-text-muted bg-primary/5">
            <Award size={48} className="text-primary/40 stroke-[1.25]" />
          </div>
        )}

        {certificate.category && (
          <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            {certificate.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {certificate.title}
        </h3>

        {certificate.issuer && (
          <span className="text-xs text-primary/80 font-medium mb-2">
            {certificate.issuer}
          </span>
        )}

        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4 font-mono">
          <Calendar size={13} />
          {formatDate(certificate.issueDate)}
        </div>

        {/* Action Footer */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/70">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
              aria-label={`Download PDF certificate for ${certificate.title}`}
            >
              Download PDF <Download size={12} />
            </a>
          ) : <div />}

          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
              aria-label={`Verify credential for ${certificate.title}`}
            >
              Verify <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
