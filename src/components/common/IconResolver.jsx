import { Layout, Server, Database, Cloud, Code, Palette, Terminal, HelpCircle } from 'lucide-react';

// Static mapping of icons to allow proper tree-shaking.
// IMPORTANT: If you add new icon names in skills.json or tech-stack.json,
// you must import them above and add them to this mapping object.
const icons = {
  Layout,
  Server,
  Database,
  Cloud,
  Code,
  Palette,
  Terminal
};

export default function IconResolver({ name, size = 24, className = '' }) {
  const IconComponent = icons[name] || HelpCircle;
  return <IconComponent size={size} className={className} />;
}
