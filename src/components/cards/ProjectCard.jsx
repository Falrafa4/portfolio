import { Link } from 'react-router';
import clsx from 'clsx';

export default function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Finished':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/50';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50';
      case 'Archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-gray-400';
    }
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden border-2 border-dashed border-border bg-surface/80 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/50  focus:outline-none focus:ring-2 focus:ring-primary select-none"
    >
      {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/70 bg-background">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            {/* Folder icon fallback */}
            <svg
              className="w-12 h-12 text-primary/40"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
          </div>
        )}
        
        {/* Status Badge */}
        <span className={clsx(
          "absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm",
          getStatusColor(project.status)
        )}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {project.title}
        </h3>
        
        {project.role && (
          <span className="text-xs text-primary/80 font-medium mb-2">
            {project.role}
          </span>
        )}

        <p className="text-sm text-text-muted line-clamp-2 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs text-text-muted self-center font-medium pl-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
