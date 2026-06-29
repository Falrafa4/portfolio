import { Briefcase } from 'lucide-react';
import ExperienceItem from '../cards/ExperienceItem';

export default function ExperienceSection({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-primary" size={24} />
        <h2 className="text-2xl font-bold m-0">Experiences</h2>
      </div>
      
      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <div className="ml-2">
          {experiences.map(exp => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
