import IconResolver from '../common/IconResolver';

export default function SkillCard({ skill }) {
  return (
    <div className="group flex min-h-36 flex-col items-center justify-center rounded-xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-black/5 hover:shadow-md dark:hover:bg-white/5 active:-translate-y-0.5 active:border-primary/40 active:bg-black/5 active:shadow-md dark:active:bg-white/5 select-none">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background p-2.5 transition-transform group-hover:scale-105 group-active:scale-105">
        <IconResolver
          name={skill.icon || skill.name}
          size={28}
        />
      </div>
      <h3 className="text-sm font-semibold text-text-main mb-1">
        {skill.name}
      </h3>
      <span className="text-xs text-text-muted px-2 py-0.5 bg-background rounded-full border border-border">
        {skill.level}
      </span>
    </div>
  );
}
