import { Layers } from 'lucide-react';
import IconResolver from '../common/IconResolver';

export default function TechStackSection({ techStack }) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Layers className="text-primary" size={24} />
        <h2 className="text-2xl font-bold m-0">Tech Stack</h2>
      </div>
      
      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm flex flex-wrap gap-3">
        {techStack.map(tech => (
          <a
            key={tech.id}
            href={tech.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-md hover:border-primary hover:text-primary transition-colors group"
          >
            <IconResolver name={tech.icon} size={16} className="text-text-muted group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
