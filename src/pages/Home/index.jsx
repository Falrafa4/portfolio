import { useMemo } from 'react';
import { Link } from 'react-router';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  User,
} from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import PageTransition from '../../components/common/PageTransition';
import BentoCard from '../../components/ui/BentoCard';
import IconResolver from '../../components/common/IconResolver';
import profileData from '../../data/profile.json';
import projectsData from '../../data/projects.json';
import experiencesData from '../../data/experiences.json';
import skillsData from '../../data/skills.json';
import techStackData from '../../data/tech-stack.json';
import contactsData from '../../data/contacts.json';
import Button from '../../components/ui/Button';

const socialLinks = [
  { label: 'GitHub', href: contactsData.github, icon: Code2 },
  { label: 'LinkedIn', href: contactsData.linkedin, icon: BriefcaseBusiness },
  { label: 'Instagram', href: contactsData.instagram, icon: Sparkles },
];

function formatYear(date) {
  return date ? new Date(date).getFullYear() : 'Now';
}

export default function Home() {
  const { searchQuery } = useSearch();
  const query = searchQuery.trim().toLowerCase();

  const filteredSkills = useMemo(() => {
    if (!query) return skillsData;
    return skillsData.filter((skill) =>
      `${skill.name} ${skill.category}`.toLowerCase().includes(query),
    );
  }, [query]);

  const filteredTechStack = useMemo(() => {
    if (!query) return techStackData;
    return techStackData.filter((tech) =>
      `${tech.name} ${tech.category}`.toLowerCase().includes(query),
    );
  }, [query]);

  const featuredProject = projectsData.find((project) => project.featured) || projectsData[0];
  const currentExperience = experiencesData.find((experience) => experience.current) || experiencesData[0];
  const visibleSkills = filteredSkills.slice(0, 6);

  if (query && filteredSkills.length === 0 && filteredTechStack.length === 0) {
    return (
      <PageTransition>
        <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center">
          <BentoCard className="max-w-lg text-center" eyebrow="Search" title="No matching skills found">
            <p className="text-sm leading-7 text-text-muted">
              Try searching for another technology, category, or skill.
            </p>
          </BentoCard>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl pb-10">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <User size={14} /> Personal workspace
            </p>
          <h1 className="max-w-[18ch] text-3xl font-black tracking-[-0.04em] text-text-main sm:max-w-xl sm:text-5xl">
              A developer who ships useful things.
            </h1>
          </div>
          <span className="hidden font-mono text-xs text-text-muted sm:block">/home/naufal/portfolio</span>
        </div>

        <div className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BentoCard className="md:col-span-2 lg:col-span-2 lg:row-span-2" eyebrow="Hello, I am" interactive>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-xl" />
                  <img
                    src={profileData.profileImage}
                    alt={profileData.fullName}
                    className="relative h-28 w-28 rounded-[1.35rem] border border-white/30 object-cover shadow-xl sm:h-36 sm:w-36"
                  />
                </div>
                <div>
                  <h2 className="max-w-xl text-3xl font-black leading-[0.95] tracking-lighter text-text-main sm:text-4xl">
                    {profileData.fullName}
                  </h2>
                  <p className="mt-4 text-base font-semibold text-primary">{profileData.professionalTitle}</p>
                  <p className="mt-1 text-sm text-text-muted">{profileData.secondaryTitle}</p>
                </div>
              </div>
              <p className="max-w-xl text-left text-base leading-8 text-text-muted sm:text-left">{profileData.longBio}</p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-1" eyebrow="Based in" title={profileData.location} interactive>
            <div className="flex h-full items-end justify-between gap-3">
              <MapPin className="text-primary" size={34} strokeWidth={1.5} />
              <span className="text-right text-xs leading-5 text-text-muted">East Java<br />Indonesia</span>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-1" eyebrow="Status" interactive accent>
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-main">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.14)]" />
                {profileData.availabilityStatus}
              </div>
              <p className="mt-8 text-sm leading-6 text-text-muted">Open to learning, building, and meaningful collaborations.</p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-2" eyebrow="Featured work" title={featuredProject.title} interactive>
            <Link to={`/projects/${featuredProject.slug}`} className="block">
              <div className="relative aspect-[2.4/1] overflow-hidden rounded-2xl bg-background">
                <img
                  src={featuredProject.thumbnail}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4 text-white">
                  <span className="text-sm font-medium">{featuredProject.shortDescription}</span>
                  <ArrowUpRight size={20} className="shrink-0" />
                </div>
              </div>
            </Link>
          </BentoCard>

          <BentoCard className="lg:col-span-2" eyebrow="Current chapter" title={currentExperience.title}>
            <div className="flex h-full flex-col justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-primary">{currentExperience.organization}</p>
                <p className="mt-3 text-sm leading-6 text-text-muted">{currentExperience.description}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-text-muted">
                <span>{formatYear(currentExperience.startDate)} - {formatYear(currentExperience.endDate)}</span>
                <BriefcaseBusiness size={16} className="text-primary" />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-1" eyebrow="Toolkit" title={`${filteredTechStack.length} core tools`}>
            <div className="flex flex-wrap gap-2">
              {filteredTechStack.map((tech) => (
                <a
                  key={tech.id}
                  href={tech.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-background/70 px-2.5 py-2 text-xs font-medium text-text-muted transition hover:border-primary/50 hover:text-primary"
                >
                  <IconResolver name={tech.icon} size={15} /> {tech.name}
                </a>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-1" eyebrow="Connect" title="Find me online">
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-text-muted transition hover:-translate-y-1 hover:border-primary/50 hover:text-primary">
                  <Icon size={17} />
                </a>
              ))}
              <a href={`mailto:${contactsData.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-text-muted transition hover:-translate-y-1 hover:border-primary/50 hover:text-primary">
                <Mail size={17} />
              </a>
            </div>
            <p className="mt-4 truncate text-xs text-text-muted">{contactsData.email}</p>
          </BentoCard>

          <BentoCard className="lg:col-span-2" eyebrow="Capabilities" title="What I bring to a team">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {visibleSkills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2 rounded-xl border border-border/70 bg-background/50 px-3 py-2.5 text-xs text-text-muted">
                  <Code2 size={14} className="shrink-0 text-primary" />
                  <span className="truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-2" eyebrow="Next step" title="Let’s build something useful." interactive>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-text-muted"><Terminal size={18} className="text-primary" /> Available for a conversation</div>
              <div className="flex gap-2">
                <Button target='/contact'>
                  Contact me <ArrowUpRight size={16} />
                </Button>
                <a href={contactsData.resumeUrl} className="inline-flex items-center justify-center rounded border-2 border-dashed border-border px-3 py-2.5 text-text-muted transition hover:border-primary/50 hover:text-primary" aria-label="Download resume">
                  <Download size={16} />
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </PageTransition>
  );
}
