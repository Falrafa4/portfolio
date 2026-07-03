import { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import profileData from '../../data/profile.json';

export default function BootSequence({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically transition and trigger complete after 1.3s
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation before calling onComplete
      const fadeTimer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(fadeTimer);
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 select-none transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center max-w-sm w-full px-6 text-center transform scale-95 animate-fade-in">
        {/* Profile Image / Avatar */}
        {profileData.profileImage ? (
          <img
            src={profileData.profileImage}
            alt={profileData.fullName}
            className="w-24 h-24 rounded-full border-2 border-primary/20 dark:border-white/20 object-cover shadow-xl mb-4"
          />
        ) : (
          <div className="w-24 h-24 rounded-full border-2 border-primary/20 dark:border-white/20 bg-surface flex items-center justify-center shadow-xl mb-4 text-text-main">
            <User size={48} className="opacity-80" />
          </div>
        )}

        {/* Name and Professional Title */}
        <h2 className="text-2xl font-bold mb-1 text-text-main drop-shadow-sm">{profileData.fullName || 'Welcome'}</h2>
        <p className="text-sm text-text-muted mb-6">{profileData.professionalTitle || 'Guest User'}</p>

        {/* Subtle Loading Dots */}
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}
