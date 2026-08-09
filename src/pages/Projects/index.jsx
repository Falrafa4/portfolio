import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '../../hooks/useSearch';
import ProjectCard from '../../components/cards/ProjectCard';
import EmptyState from '../../components/common/EmptyState';
import PageTransition from '../../components/common/PageTransition';
import projectsData from '../../data/projects.json';

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

export default function Projects() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [activeCategory, setActiveCategory] = useState(allCategory);

  const categories = useMemo(() => {
    const dataCategories = projectsData
      .map((project) => project.category?.trim())
      .filter(Boolean);

    return [allCategory, ...new Set(dataCategories)];
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projectsData];

    // 1. Category Filter
    if (activeCategory !== allCategory) {
      result = result.filter((project) => project.category === activeCategory);
    }

    // 2. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((project) => {
        const matchTitle = project.title?.toLowerCase().includes(query);
        const matchDesc = project.description?.toLowerCase().includes(query) || 
                          project.shortDescription?.toLowerCase().includes(query);
        const matchTech = project.technologies?.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        const matchFeatures = project.features?.some((feature) =>
          feature.toLowerCase().includes(query)
        );

        return matchTitle || matchDesc || matchTech || matchFeatures;
      });
    }

    // 3. Sort: Featured first
    return result.sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory(allCategory);
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-main flex items-center gap-2">
              Projects
            </h1>
            <p className="text-text-muted mt-1 text-sm">
              Explore my work and personal development projects.
            </p>
          </div>
          
          {(searchQuery || activeCategory !== allCategory) && (
            <div className="text-xs text-text-muted self-end sm:self-center font-mono">
              Showing {filteredAndSortedProjects.length} of {projectsData.length} projects
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="mb-6 overflow-x-auto pb-1" role="tablist" aria-label="Filter projects by category">
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
        {filteredAndSortedProjects.length === 0 ? (
          <EmptyState
            title="No projects match your filters"
            message={
              searchQuery
                ? `We couldn't find any projects matching "${searchQuery}" in ${activeCategory}. Try another search or category.`
                : `There are no projects in ${activeCategory} yet. Try another category.`
            }
            actionLabel={searchQuery ? 'Clear Search' : 'Show All'}
            onAction={handleResetFilters}
          />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8"
          >
            {filteredAndSortedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
