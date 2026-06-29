import AboutSection from '../../components/sections/AboutSection';
import ExperienceSection from '../../components/sections/ExperienceSection';
import SkillsSection from '../../components/sections/SkillsSection';
import TechStackSection from '../../components/sections/TechStackSection';

import profileData from '../../data/profile.json';
import experiencesData from '../../data/experiences.json';
import skillsData from '../../data/skills.json';
import techStackData from '../../data/tech-stack.json';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto pb-10">
      {/* <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-sm">
        <div className="relative px-5 py-4 sm:px-6">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(0,58,137,0.18),transparent_55%)]" />
          <div className="relative flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Portfolio
              </p>
              <h1 className="mt-1 text-2xl font-bold text-text-main sm:text-3xl">
                Home
              </h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-text-muted sm:text-right">
              A compact overview of my profile, experience, skills, and tech stack.
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col gap-6">
        <AboutSection profile={profileData} />
        <ExperienceSection experiences={experiencesData} />
        <SkillsSection skills={skillsData} />
        <TechStackSection techStack={techStackData} />
      </div>
    </div>
  );
}
