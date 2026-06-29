import IconResolver from '../common/IconResolver';

function isSvgIcon(icon) {
  return typeof icon === 'string' && icon.endsWith('.svg');
}

export default function SkillCard({ skill }) {
  return (
    <div className="group flex min-h-36 flex-col items-center justify-center rounded-xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-black/5 hover:shadow-md dark:hover:bg-white/5">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background p-2.5 transition-transform group-hover:scale-105">
        {isSvgIcon(skill.icon) ? (
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        ) : (
          <IconResolver name={skill.icon} size={28} className="text-text-muted group-hover:text-primary" />
        )}
      </div>
      <h3 className="text-sm font-semibold text-text-main mb-1">{skill.name}</h3>
      <span className="text-xs text-text-muted px-2 py-0.5 bg-background rounded-full border border-border">
        {skill.level}
      </span>
    </div>
  );
}
