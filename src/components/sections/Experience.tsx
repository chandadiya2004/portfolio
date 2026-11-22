import experiencesData from '../../data/sections/experiences.json';
import { ExperienceClient } from './ExperienceClient';

export const Experience = () => {
  return (
    <ExperienceClient
      heading={experiencesData.heading}
      eyebrow={experiencesData.eyebrow}
      description={experiencesData.description}
      experiences={experiencesData.experiences}
    />
  );
};

export default Experience;
