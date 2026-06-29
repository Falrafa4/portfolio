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
          <div key={category}>
            <h3 className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
