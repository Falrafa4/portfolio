import { useParams, Link } from 'react-router';
import { useMemo } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, PlayCircle, Archive } from 'lucide-react';
import projectsData from '../../data/projects.json';
import EmptyState from '../../components/common/EmptyState';
import PageTransition from '../../components/common/PageTransition';
import Button from '../../components/ui/Button';

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(() => {
    return projectsData.find((p) => p.slug === slug);
  }, [slug]);

  // Handle case where project is not found
  if (!project) {
    return (
      <PageTransition>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <EmptyState
            title="Project Not Found"
            message={`We couldn't find a project matching the address "/projects/${slug}". It may have been moved or deleted.`}
            actionLabel="Back to Projects"
            onAction={() => window.location.replace('/projects')}
          />
        </div>
      </PageTransition>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Finished':
        return <CheckCircle2 size={16} className="text-green-500" />;
      case 'Ongoing':
        return <PlayCircle size={16} className="text-blue-500" />;
      case 'Archived':
        return <Archive size={16} className="text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Finished':
        return 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20';
      case 'Ongoing':
        return 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Archived':
        return 'text-gray-600 dark:text-gray-400 bg-gray-500/10 border-gray-500/20';
      default:
        return 'text-text-muted bg-border';
    }
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto pb-12">
      {/* Header and Back Link */}
      <div className="mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-4 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <h1 className="text-3xl font-bold text-text-main">{project.title}</h1>
            {project.role && (
              <p className="text-primary font-medium mt-1 text-sm">{project.role}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Status Badge */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColorClass(project.status)}`}>
              {getStatusIcon(project.status)}
              <span>{project.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content stack */}
      <div className="flex flex-col gap-8">
        {/* Project Image */}
        {project.thumbnail && (
          <div className="aspect-video w-full overflow-hidden border-2 border-border border-dashed hover:border-primary/50 transition bg-background">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="bg-surface border-2 border-border border-dashed hover:border-primary/50 transition p-6">
          <h2 className="text-lg font-bold text-text-main mb-3">Project Overview</h2>
          <p className="text-text-muted leading-relaxed text-sm whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Features list */}
        {project.features && project.features.length > 0 && (
          <div className="bg-surface border-2 border-border border-dashed hover:border-primary/50 transition p-6">
            <h2 className="text-lg font-bold text-text-main mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies list */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="bg-surface border-2 border-border border-dashed hover:border-primary/50 transition p-6">
            <h2 className="text-lg font-bold text-text-main mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-background border border-border text-text-muted rounded-md text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          {project.demoUrl && (
            <Button
              href={project.demoUrl}
              variant="primary"
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
          
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Repository
            </Button>
          )}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
