import type { Project } from "../types/projects";
const featuredProjects: Project[] = [
  {
    title: "Chef AI Assistant",
    description:
      "An AI-powered kitchen assistant that suggests meals based on available ingredients, recipes, and cooking appliances.",
    technologies: [
      "Next.js",
      "React",
      "Tanstack Query",
      "OpenAI API",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/vincejosephladrera/ai-chef-assistant",
    liveUrl: "https://ai-chef-assistant.vercel.app/",
    status: "Completed",
  },
  {
    title: "Blog App",
    description:
      "Explored Supabase by building a full-featured blog app with user authentication and real-time database support.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    githubUrl: "https://github.com/vincejosephladrera/blog-crud-app",
    liveUrl: "https://blog-crud-app-ten.vercel.app/",
    status: "Completed",
  },
];

export { featuredProjects };
