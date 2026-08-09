import clsx from 'clsx';
import { Link } from 'react-router';

export default function Button({
  children,
  to,
  href,
  target,
  variant = 'primary',
  size = 'md',
  external,
  className = '',
  classname = '',
  type = 'button',
  onClick,
  ...props
}) {
  const combinedClassName = className || classname;

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center gap-2 rounded transition-all duration-200 font-bold select-none cursor-pointer active:scale-[0.97] after:pointer-events-none after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 active:after:opacity-100 after:transition-opacity after:duration-200';

  const variantStyles = {
    primary:
      'bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-dashed hover:text-primary',
    secondary:
      'bg-surface border-2 border-dashed border-border text-text-main hover:border-primary/50 hover:text-primary',
    outline:
      'bg-surface border-2 border-dashed border-border text-text-main hover:border-primary/50 hover:text-primary',
    ghost:
      'bg-transparent text-text-muted hover:bg-primary/10 hover:text-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    combinedClassName
  );

  // Normalize link destinations
  const destination = to || href || target;
  const isExternalUrl =
    external ||
    (typeof destination === 'string' &&
      (destination.startsWith('http://') ||
        destination.startsWith('https://') ||
        destination.startsWith('mailto:')));

  if (destination) {
    if (isExternalUrl) {
      return (
        <a
          href={destination}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={destination} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
