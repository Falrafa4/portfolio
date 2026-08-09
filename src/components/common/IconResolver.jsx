import { Code2 } from 'lucide-react';

const techIconMap = {
  html: '/tech-icons/html.svg',
  css: '/tech-icons/css.svg',
  javascript: '/tech-icons/javascript.svg',
  js: '/tech-icons/javascript.svg',
  bootstrap: '/tech-icons/bootstrap.svg',
  tailwindcss: '/tech-icons/tailwindcss.svg',
  tailwind: '/tech-icons/tailwindcss.svg',
  'react.js': '/tech-icons/react.svg',
  reactjs: '/tech-icons/react.svg',
  react: '/tech-icons/react.svg',
  'next.js': '/tech-icons/nextjs.svg',
  nextjs: '/tech-icons/nextjs.svg',
  next: '/tech-icons/nextjs.svg',
  php: '/tech-icons/php.svg',
  laravel: '/tech-icons/laravel.svg',
  mariadb: '/tech-icons/mariadb.svg',
  mysql: '/tech-icons/mariadb.svg',
  postgresql: '/tech-icons/postgresql.svg',
  postgres: '/tech-icons/postgresql.svg',
  apache: '/tech-icons/apache.svg',
  'apache 2': '/tech-icons/apache.svg',
  apache2: '/tech-icons/apache.svg',
  nginx: '/tech-icons/nginx.svg',
  cloudflare: '/tech-icons/cloudflare.svg',
  'github actions': '/tech-icons/github-actions.svg',
  'github-actions': '/tech-icons/github-actions.svg',
  git: '/tech-icons/git.svg',
  github: '/tech-icons/github.svg',
  filament: '/tech-icons/filament.svg',
  'inertia.js': '/tech-icons/inertia.svg',
  inertiajs: '/tech-icons/inertia.svg',
  inertia: '/tech-icons/inertia.svg',
  capacitor: '/tech-icons/capacitor.svg',

  // Lucide legacy keys mapping to SVG icons
  code: '/tech-icons/react.svg',
  palette: '/tech-icons/tailwindcss.svg',
  terminal: '/tech-icons/laravel.svg',
  database: '/tech-icons/postgresql.svg',
  server: '/tech-icons/nginx.svg',
  cloud: '/tech-icons/cloudflare.svg',
  layout: '/tech-icons/html.svg',
};

export default function IconResolver({ name, size = 20, className = '' }) {
  if (!name) return <Code2 size={size} className={className} />;

  let src = '';

  if (typeof name === 'string') {
    if (name.startsWith('/') || name.endsWith('.svg')) {
      src = name;
    } else {
      const normalizedKey = name.toLowerCase().trim();
      src = techIconMap[normalizedKey] || '';
    }
  }

  if (src) {
    return (
      <img
        src={src}
        alt={`${name} icon`}
        width={size}
        height={size}
        className={`inline-block object-contain shrink-0 filter dark:invert ${className}`}
        style={{ width: size, height: size }}
        loading="lazy"
      />
    );
  }

  return <Code2 size={size} className={className} />;
}
