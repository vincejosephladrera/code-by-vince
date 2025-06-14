import {
  ExternalLink,
  Play,
  Settings,
  CheckCircle,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "../types/projects";

const statusConfig = {
  Completed: {
    icon: <CheckCircle className="h-4 w-4" />,
    color: "text-game-green bg-secondary/game-green border-game-green",
    label: "Quest Complete",
  },
  "In Progress": {
    icon: <Play className="h-4 w-4" />,
    color: "text-primary bg-primary/20 border-primary",
    label: "In Progress",
  },
  Planning: {
    icon: <Settings className="h-4 w-4" />,
    color: "text-game-yellow bg-game-yellow/20 border-game-yellow",
    label: "Planning Phase",
  },
};

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
}: Project) => {
  return (
    <Card className="group hover:shadow-primary/30 border-primary border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-game-slate group-hover:text-primary text-xl font-bold transition-all duration-300">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-card-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="mb-2 flex flex-wrap items-center justify-between gap-1">
          <span className="text-sm font-medium">Quest Status:</span>
          <Badge
            variant="outline"
            className={`${statusConfig[status].color} ml-auto font-medium`}
          >
            {statusConfig[status].icon}
            <span className="ml-1">{statusConfig[status].label}</span>
          </Badge>
        </section>
        <section>
          <p className="mb-1 text-sm font-medium">Gears:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                color="green"
                className="text-xs transition-transform duration-300 hover:scale-110"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-0">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            color="slate"
            className="flex-1"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="flex-1 font-bold" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Play Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
