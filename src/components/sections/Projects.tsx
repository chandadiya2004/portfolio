import data from '../../data/sections/projects.json';
import { ProjectsClient } from './ProjectsClient';

export const Projects = () => {
  return (
    <ProjectsClient
      heading={data.heading}
      eyebrow={data.eyebrow}
      description={data.description}
      projects={data.projects}
    />
  );
};

export default Projects;
