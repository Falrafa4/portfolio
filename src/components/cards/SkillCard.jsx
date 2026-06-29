import IconResolver from '../common/IconResolver';

export default function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:bg-black/5 dark:hover:bg-white/5 transition-all text-center group">
      <div className="mb-3 p-3 bg-background rounded-full text-text-muted group-hover:text-primary transition-colors">
        <IconResolver name={skill.icon} size={28} />
      </div>
      <h3 className="text-sm font-semibold text-text-main mb-1">{skill.name}</h3>
      <span className="text-xs text-text-muted px-2 py-0.5 bg-background rounded-full border border-border">
        {skill.level}
      </span>
    </div>
  );
}
