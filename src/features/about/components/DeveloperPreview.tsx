import Container from "@/components/Container";
import { skillGroup, allSkills } from "../data/skills";
import { experience } from "../data/experience";
import { Calendar, Sword, Target, Trophy } from "lucide-react";
import SkillCard from "./SkillCard";
import { buttonVariants } from "@/components/ui/button";
import ExperienceCardSmall from "./ExperienceCardSmall";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DeveloperPreview = () => {
  return (
    <section className="border-game-blue/50 border-t-4 bg-white px-4 py-20 text-center">
      <Container>
        <h2 className="text-game-blue mb-4 text-4xl font-bold">
          Developer Stats Preview
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-xl">
          Get a glimpse of my character attributes and skill tree. Dive deeper
          to see the complete development arsenal.
        </p>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-game-slate mb-6 flex items-center gap-3 text-2xl font-bold">
              <Sword className="text-primary" size={24} />
              {skillGroup[0]?.title}
            </h3>
            <div className="mb-6 grid gap-4">
              {skillGroup[0]?.skills
                .slice(0, 6)
                .map((skill, index) => <SkillCard key={index} {...skill} />)}
            </div>
            <div className="flex justify-start">
              <Link
                className={
                  (cn("flex gap-2"),
                  buttonVariants({ variant: "outline", color: "primary" }))
                }
                href="/about"
              >
                <Target />
                View Full Skill Tree ({allSkills.length} Skills)
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-game-slate mb-6 flex items-center gap-3 text-2xl font-bold">
              <Trophy className="text-game-yellow" size={24} />
              Guild History
            </h3>
            <div className="mb-6 grid gap-2">
              {experience.slice(0, 3).map((exp, index) => (
                <ExperienceCardSmall key={index} {...exp} />
              ))}
            </div>
            <div className="flex justify-start">
              <Link
                className={
                  (cn("flex gap-2"),
                  buttonVariants({ variant: "outline", color: "primary" }))
                }
                href="/about"
              >
                <Calendar />
                View Full History
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeveloperPreview;

{
  /* <section className="border-primary/50 border-t-4 bg-white px-4 py-20">
  <Container className="text-center">
    <h2 className="text-game-purple mb-4 text-4xl font-bold">Epic Quests</h2>
    <p className="mx-auto mb-16 max-w-2xl text-xl">
      Recent legendary quests completed successfully. Each project represents a
      unique challenge conquered with skill and determination.
    </p>
    <div className="mb-12 grid gap-8 text-left md:grid-cols-2">
      {featuredProjects.map(({ status, ...rest }, index) => (
        <ProjectCard key={index} status={status} {...rest} />
      ))}
    </div>
    <Link
      href="/projects"
      className={cn(
        buttonVariants({ variant: "outline", color: "purple", size: "lg" }),
        "font-bold hover:scale-x-110",
      )}
    >
      See All Quests
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  </Container>
</section>; */
}
