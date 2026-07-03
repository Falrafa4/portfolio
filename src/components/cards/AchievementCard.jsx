import { Award, Calendar, Landmark } from 'lucide-react';

export default function AchievementCard({ achievement }) {
  return (
    <div className="group flex flex-col bg-surface border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all select-none">
      {/* Thumbnail or Badge */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-background border-b border-border flex items-center justify-center">
        {achievement.image ? (
          <img
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-text-muted bg-primary/5">
            <Award size={48} className="text-primary/40 stroke-[1.25]" />
          </div>
        )}
        
        {/* Achievement tag badge */}
        <span className="absolute top-2.5 right-2.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
          {achievement.achievement}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {achievement.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-text-muted mb-3 font-medium">
          <Landmark size={12} />
          <span>{achievement.organizer}</span>
        </div>

        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
          {achievement.description}
        </p>

        <div className="mt-auto pt-2 border-t border-border/50 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
            <Calendar size={12} />
            {achievement.year}
          </span>
        </div>
      </div>
    </div>
  );
}
