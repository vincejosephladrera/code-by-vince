interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  tags?: string[];
  status: "In Progress" | "Completed" | "Planning";
}

export type { Project };
