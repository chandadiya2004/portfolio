import data from '../../data/sections/research.json';
import { ResearchClient } from './ResearchClient';

export const Research = () => {
  return (
    <ResearchClient
      heading={data.heading}
      papers={data.papers as any}
    />
  );
};

export default Research;
