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
    <div className="max-w-5xl mx-auto pb-8">
      {/* Page Header (resembling a folder header) */}
      <div className="mb-8 border-b border-border pb-4">
        <h1 className="text-3xl font-bold text-text-main">Home</h1>
        <p className="text-text-muted mt-2">Welcome to my professional profile.</p>
      </div>

      <div className="flex flex-col gap-4">
        <AboutSection profile={profileData} />
        <ExperienceSection experiences={experiencesData} />
        <SkillsSection skills={skillsData} />
        <TechStackSection techStack={techStackData} />
      </div>
    </div>
  );
}
