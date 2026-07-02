import { useMemo } from 'react';
import { useSearch } from '../../hooks/useSearch';
import ProjectCard from '../../components/cards/ProjectCard';
import EmptyState from '../../components/common/EmptyState';
import projectsData from '../../data/projects.json';

export default function Projects() {
  const { searchQuery, setSearchQuery } = useSearch();

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projectsData];

    // 1. Search Filter
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

    // 2. Sort: Featured first
    return result.sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });
  }, [searchQuery]);

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col h-full animate-fade-in">
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
            Projects
          </h1>
          <p className="text-text-muted mt-1 text-sm">
            Explore my work and personal development projects.
          </p>
        </div>
        
        {searchQuery && (
          <div className="text-xs text-text-muted self-end sm:self-center font-mono">
            Showing {filteredAndSortedProjects.length} of {projectsData.length} projects
          </div>
        )}
      </div>

      {/* Main Grid or Empty State */}
      {filteredAndSortedProjects.length === 0 ? (
        <EmptyState
          title="No projects match your search"
          message={`We couldn't find any projects matching "${searchQuery}". Try using different keywords, technology names, or roles.`}
          actionLabel="Clear Search"
          onAction={handleResetSearch}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {filteredAndSortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
