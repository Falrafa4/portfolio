import { Code2 } from 'lucide-react';
import SkillCard from '../cards/SkillCard';

export default function SkillsSection({ skills }) {
  if (!skills || skills.length === 0) return null;

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="text-primary" size={24} />
        <h2 className="text-2xl font-bold m-0">Skills</h2>
      </div>
      
      <div className="space-y-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="rounded-2xl border border-border bg-surface/60 p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">{category}</h3>
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-text-muted">
                {categorySkills.length} skills
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {categorySkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
