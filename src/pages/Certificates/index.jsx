import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '../../hooks/useSearch';
import CertificateCard from '../../components/cards/CertificateCard';
import EmptyState from '../../components/common/EmptyState';
import PageTransition from '../../components/common/PageTransition';
import certificatesData from '../../data/certificates.json';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }
};

export default function Certificates() {
  const { searchQuery, setSearchQuery } = useSearch();

  const filteredAndSortedCertificates = useMemo(() => {
    let result = [...certificatesData];

    // 1. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((cert) => {
        const matchTitle = cert.title?.toLowerCase().includes(query);
        const matchIssuer = cert.issuer?.toLowerCase().includes(query);
        return matchTitle || matchIssuer;
      });
    }

    // 2. Sort: Newest first (by issueDate)
    return result.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
  }, [searchQuery]);

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-full">
        {/* Folder Header */}
        <div className="mb-6 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
              <svg
                className="w-7 h-7 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              Certificates
            </h1>
            <p className="text-text-muted mt-1 text-sm">
              Professional certifications and training credentials.
            </p>
          </div>
          
          {searchQuery && (
            <div className="text-xs text-text-muted self-end sm:self-center font-mono">
              Showing {filteredAndSortedCertificates.length} of {certificatesData.length} certificates
            </div>
          )}
        </div>

        {/* Main Grid or Empty State */}
        {filteredAndSortedCertificates.length === 0 ? (
          <EmptyState
            title="No certificates match your search"
            message={`We couldn't find any certificates matching "${searchQuery}". Try searching by credential name or issuer.`}
            actionLabel="Clear Search"
            onAction={handleResetSearch}
          />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8"
          >
            {filteredAndSortedCertificates.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <CertificateCard certificate={cert} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
