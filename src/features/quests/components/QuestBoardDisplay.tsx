import { allProjects } from "../data/allProjects";
import ProjectCard from "./ProjectCard";

const QuestBoardDisplay = () => {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {allProjects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default QuestBoardDisplay;
