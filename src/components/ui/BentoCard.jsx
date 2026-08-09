import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function BentoCard({
  children,
  className = '',
  eyebrow,
  title,
  action,
  interactive = false,
  accent = false,
}) {
  return (
    <motion.article
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={clsx(
        'group relative overflow-hidden border-2 border-dashed dashed border-border bg-surface/80 p-5 backdrop-blur-xl sm:p-6',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300',
        interactive && 'cursor-pointer hover:border-primary/45',
        interactive && 'hover:before:opacity-100',
        accent && 'border-primary/30 bg-primary/8',
        className,
      )}
    >
      {(eyebrow || title || action) && (
        <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-lg font-bold tracking-tight text-text-main sm:text-xl">{title}</h2>}
          </div>
          {action}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}
