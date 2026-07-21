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
    <div className="group flex flex-col bg-surface border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all select-none">
      {/* Thumbnail or Badge */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-background border-b border-border flex items-center justify-center">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-text-muted bg-primary/5">
            <Award size={48} className="text-primary/40 stroke-[1.25]" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-2 mb-2 min-h-[40px]">
          {certificate.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4 mt-auto">
          <span className="font-semibold text-text-main">{certificate.issuer}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-2 border-t border-border/50">
          <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
            <Calendar size={12} />
            {formatDate(certificate.issueDate)}
          </span>

          <div className="flex flex-wrap items-center gap-3 ml-auto">
            {downloadUrl && (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                aria-label={`Download PDF certificate for ${certificate.title}`}
              >
                Download PDF <Download size={12} />
              </a>
            )}

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                aria-label={`Verify credential for ${certificate.title}`}
              >
                Verify <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
