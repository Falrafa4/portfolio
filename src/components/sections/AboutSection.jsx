import { Mail, MapPin, User } from 'lucide-react';

export default function AboutSection({ profile }) {
  if (!profile) return null;

  return (
    <section className="mb-14">
      <div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm">
        <div className="relative grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(230px,0.75fr)_1.25fr] lg:items-center lg:px-15 lg:py-10">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/15" />
              <div className="relative rounded-[1.65rem] border border-border bg-background/80 p-2 shadow-xl shadow-black/5 dark:shadow-black/30 -rotate-1 hover:scale-105 hover:rotate-0 transition-transform duration-300">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={profile.fullName}
                    className="h-52 w-52 rounded-[1.25rem] object-cover sm:h-60 sm:w-60 lg:h-64 lg:w-64"
                  />
                ) : (
                  <div className="flex h-52 w-52 flex-col items-center justify-center rounded-[1.25rem] border border-border bg-background sm:h-60 sm:w-60 lg:h-64 lg:w-64">
                    <User size={42} className="mb-3 text-text-muted" />
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                      No Image
                    </span>
                  </div>
                )}

                {profile.availabilityStatus && (
                  <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-main shadow-lg sm:left-auto sm:right-4 sm:translate-x-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.16)]" />
                    {profile.availabilityStatus}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-text-main sm:text-4xl lg:text-5xl">
              {profile.fullName}
            </h2>

            <div className="mt-4 flex flex-col items-center gap-2 lg:items-start">
              <p className="text-lg font-bold text-primary sm:text-xl">
                {profile.professionalTitle}
              </p>
              {profile.secondaryTitle && (
                <p className="text-sm font-medium text-text-muted sm:text-base">
                  {profile.secondaryTitle}
                </p>
              )}
            </div>

            <p className="mx-auto mt-5 max-w-2xl whitespace-pre-wrap text-base leading-8 text-text-muted lg:mx-0">
              {profile.longBio || profile.shortBio}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-text-muted lg:justify-start">
              {profile.location && (
                <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
                  <MapPin size={15} className="text-primary" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.email && (
                <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
                  <Mail size={15} className="text-primary" />
                  <span>{profile.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
