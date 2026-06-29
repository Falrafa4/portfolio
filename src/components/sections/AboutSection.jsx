import { User } from 'lucide-react';

export default function AboutSection({ profile }) {
  if (!profile) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <User className="text-primary" size={24} />
        <h2 className="text-2xl font-bold m-0">About Me</h2>
      </div>
      
      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {profile.profileImage ? (
            <img 
              src={profile.profileImage} 
              alt={profile.fullName} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover border border-border shadow-sm flex-shrink-0"
            />
          ) : (
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-background border border-border flex flex-col items-center justify-center flex-shrink-0">
              <User size={32} className="text-text-muted mb-2" />
              <span className="text-xs text-text-muted">No Image</span>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-bold text-text-main mb-1">{profile.fullName}</h3>
            <p className="text-primary font-medium mb-3">{profile.professionalTitle}</p>
            <p className="text-sm text-text-muted leading-relaxed whitespace-pre-wrap">
              {profile.longBio || profile.shortBio}
            </p>
            
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
              {profile.location && (
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-text-main">Location:</span> {profile.location}
                </div>
              )}
              {profile.email && (
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-text-main">Email:</span> {profile.email}
                </div>
              )}
              {profile.availabilityStatus && (
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {profile.availabilityStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
