import { useMemo } from 'react';
import AboutSection from '../../components/sections/AboutSection';
import ExperienceSection from '../../components/sections/ExperienceSection';
import SkillsSection from '../../components/sections/SkillsSection';
import TechStackSection from '../../components/sections/TechStackSection';

import { useSearch } from '../../hooks/useSearch';
import profileData from '../../data/profile.json';
import experiencesData from '../../data/experiences.json';
import skillsData from '../../data/skills.json';
import techStackData from '../../data/tech-stack.json';

export default function Home() {
  const { searchQuery } = useSearch();

  const filteredSkills = useMemo(() => {
    if (searchQuery.trim() === '') return skillsData;
    const query = searchQuery.toLowerCase().trim();
    return skillsData.filter(
      (skill) =>
        skill.name?.toLowerCase().includes(query) ||
        skill.category?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredTechStack = useMemo(() => {
    if (searchQuery.trim() === '') return techStackData;
    const query = searchQuery.toLowerCase().trim();
    return techStackData.filter(
      (tech) =>
        tech.name?.toLowerCase().includes(query) ||
        tech.category?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // If a search query is active, we only want to show sections that have matching items
  const showAboutAndExperience = searchQuery.trim() === '';

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <div className="flex flex-col gap-6">
        {showAboutAndExperience && (
          <>
            <AboutSection profile={profileData} />
            <ExperienceSection experiences={experiencesData} />
          </>
        )}
        <SkillsSection skills={filteredSkills} />
        <TechStackSection techStack={filteredTechStack} />
        
        {!showAboutAndExperience && filteredSkills.length === 0 && filteredTechStack.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No matching skills or technologies found on this page.
          </div>
        )}
      </div>
    </div>
  );
}
