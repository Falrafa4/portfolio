import * as LucideIcons from 'lucide-react';

export default function IconResolver({ name, size = 24, className = '' }) {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    // Fallback icon if the requested one doesn't exist
    const Fallback = LucideIcons.HelpCircle;
    return <Fallback size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
}
