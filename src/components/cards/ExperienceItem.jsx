export default function ExperienceItem({ experience }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="relative pl-6 pb-8 border-l border-border last:pb-0">
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
      
      <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-text-main">{experience.title}</h3>
        <span className="text-sm text-text-muted font-mono mt-1 sm:mt-0">
          {formatDate(experience.startDate)} - {experience.current ? 'Present' : formatDate(experience.endDate)}
        </span>
      </div>
      
      <div className="text-sm font-medium text-primary mb-3">
        {experience.organization} <span className="text-text-muted font-normal mx-1">•</span> {experience.type}
      </div>
      
      <p className="text-sm text-text-muted mb-3 leading-relaxed">
        {experience.description}
      </p>
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(tech => (
            <span key={tech} className="text-xs font-mono bg-background text-text-muted px-2 py-1 rounded border border-border">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
