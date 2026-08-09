import { Award, Calendar, Landmark } from 'lucide-react';

export default function AchievementCard({ achievement }) {
  return (
    <div className="group flex flex-col overflow-hidden border-2 border-dashed border-border bg-surface/80 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/50 select-none">
      {/* Thumbnail or Badge */}
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border/70 bg-background flex items-center justify-center">
        {achievement.image ? (
          <img
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-text-muted bg-primary/5">
            <Award size={48} className="text-primary/40 stroke-[1.25]" />
          </div>
        )}
        
        {/* Achievement tag badge */}
        {achievement.achievement && (
          <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            {achievement.achievement}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {achievement.title}
        </h3>

        {achievement.organizer && (
          <span className="text-xs text-primary/80 font-medium mb-2">
            {achievement.organizer}
          </span>
        )}

        <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
          {achievement.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/70">
          <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
            <Calendar size={13} />
            {achievement.year}
          </span>
        </div>
      </div>
    </div>
  );
}
