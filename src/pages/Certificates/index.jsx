import { useMemo, useState } from 'react';
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

const allCategory = 'All';
const defaultCategories = [
  'Bootcamps & Courses',
  'Competition Participation',
  'Seminars & Workshops'
];

export default function Certificates() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [activeCategory, setActiveCategory] = useState(allCategory);

  const categories = useMemo(() => {
    const dataCategories = certificatesData
      .map((certificate) => certificate.category?.trim())
      .filter(Boolean);

    return [allCategory, ...new Set([...defaultCategories, ...dataCategories])];
  }, []);

  const filteredAndSortedCertificates = useMemo(() => {
    let result = [...certificatesData];

    // 1. Category Filter
    if (activeCategory !== allCategory) {
      result = result.filter((cert) => cert.category === activeCategory);
    }

    // 2. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((cert) => {
        const matchTitle = cert.title?.toLowerCase().includes(query);
        const matchIssuer = cert.issuer?.toLowerCase().includes(query);
        return matchTitle || matchIssuer;
      });
    }

    // 3. Sort: Newest first (by issueDate)
    return result.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="flex flex-col h-full">
        {/* Folder Header */}
        <div className="mb-6 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-main flex items-center gap-2">
              Certificates
            </h1>
            <p className="text-text-muted mt-1 text-sm">
              Professional certifications and training credentials.
            </p>
          </div>
          
          {(searchQuery || activeCategory !== allCategory) && (
            <div className="text-xs text-text-muted self-end sm:self-center font-mono">
              Showing {filteredAndSortedCertificates.length} of {certificatesData.length} certificates
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="mb-6 overflow-x-auto pb-1" role="tablist" aria-label="Filter certificates by category">
          <div className="flex min-w-max gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-surface text-text-muted hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid or Empty State */}
        {filteredAndSortedCertificates.length === 0 ? (
          <EmptyState
            title="No certificates match your filters"
            message={
              searchQuery
                ? `We couldn't find any certificates matching "${searchQuery}" in ${activeCategory}. Try another search or category.`
                : `There are no certificates in ${activeCategory} yet. Try another category.`
            }
            actionLabel={searchQuery ? 'Clear Search' : 'Show All'}
            onAction={() => {
              setSearchQuery('');
              setActiveCategory(allCategory);
            }}
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
