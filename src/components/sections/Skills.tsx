import skillsData from '../../data/sections/skills.json';
import { SkillsClient } from './SkillsClient';

export const Skills = () => {
  return (
    <SkillsClient
      heading={skillsData.heading}
      eyebrow={skillsData.eyebrow}
      description={skillsData.description}
      categories={skillsData.categories}
    />
  );
};

export default Skills;
