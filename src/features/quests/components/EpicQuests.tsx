import { buttonVariants } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import { featuredProjects } from "../data/featuredProjects";
import { cn } from "@/lib/utils";

const EpicQuests = () => {
  return (
    <section className="border-game-purple/50 border-t-4 bg-white px-4 py-20">
      <Container className="text-center">
        <h2 className="text-game-purple mb-4 text-4xl font-bold">
          Epic Quests
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-xl">
          Recent legendary quests completed successfully. Each project
          represents a unique challenge conquered with skill and determination.
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
    </section>
  );
};

export default EpicQuests;
