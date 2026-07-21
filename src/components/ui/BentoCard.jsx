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
        'group relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-surface/80 p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-6',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300',
        interactive && 'cursor-pointer hover:border-primary/45 hover:shadow-[0_24px_55px_-30px_rgba(37,99,235,0.45)]',
        interactive && 'hover:before:opacity-100',
        accent && 'border-primary/30 bg-primary/[0.08]',
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
