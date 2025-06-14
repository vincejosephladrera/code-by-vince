type Skill = {
  name: string;
  level: "Proficient" | "Skilled" | "Experienced" | "Familiar";
  icon: string;
};

type SkillGroup = {
  title: string;
  icon: string;
  skills: Skill[];
};

const skillGroup: SkillGroup[] = [
  {
    title: "Core Frontend Technologies",
    icon: "⚛️",
    skills: [
      { name: "Next.js", level: "Proficient", icon: "▲" },
      { name: "React", level: "Proficient", icon: "⚛️" },
      { name: "TypeScript", level: "Skilled", icon: "🔷" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "⚡" },
      { name: "HTML5", level: "Proficient", icon: "🏗️" },
      { name: "CSS3", level: "Proficient", icon: "🎨" },
      { name: "Sass/SCSS", level: "Proficient", icon: "💅" },
      { name: "Tailwind CSS", level: "Proficient", icon: "🌊" },
      { name: "Bootstrap", level: "Proficient", icon: "📱" },
      { name: "Shadcn UI", level: "Skilled", icon: "🎯" },
      { name: "Radix UI", level: "Skilled", icon: "🔮" },
      { name: "Responsive Design", level: "Proficient", icon: "📐" },
      { name: "Accessibility (a11y)", level: "Skilled", icon: "♿" },
    ],
  },
  {
    title: "State, Data Management & Validation",
    icon: "🗄️",
    skills: [
      { name: "Redux", level: "Experienced", icon: "🔄" },
      { name: "Redux Toolkit", level: "Experienced", icon: "🛠️" },
      { name: "Context API", level: "Proficient", icon: "🌐" },
      { name: "TanStack Query", level: "Skilled", icon: "🔍" },
      { name: "TanStack Table", level: "Skilled", icon: "📊" },
      { name: "Axios", level: "Skilled", icon: "🌍" },
      { name: "Fetch API", level: "Proficient", icon: "📡" },
      { name: "React Hook Form", level: "Proficient", icon: "📝" },
      { name: "Zod", level: "Proficient", icon: "✅" },
    ],
  },
  {
    title: "Animations, Interactivity & Data Visualization",
    icon: "🎭",
    skills: [
      { name: "GSAP", level: "Proficient", icon: "⚡" },
      { name: "Framer Motion", level: "Skilled", icon: "🎬" },
      { name: "Chart.js", level: "Experienced", icon: "📈" },
      { name: "Leaflet", level: "Experienced", icon: "🗺️" },
      { name: "FullCalendar", level: "Experienced", icon: "📅" },
      { name: "Editor.js", level: "Experienced", icon: "✏️" },
      { name: "Splide", level: "Proficient", icon: "🎠" },
      { name: "Intersection Observer API", level: "Skilled", icon: "👁️" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗃️",
    skills: [
      { name: "Node.js", level: "Experienced", icon: "🟢" },
      { name: "Ruby on Rails", level: "Experienced", icon: "💎" },
      { name: "PostgreSQL", level: "Experienced", icon: "🐘" },
      { name: "Prisma ORM", level: "Experienced", icon: "🔗" },
      { name: "REST API Integration", level: "Proficient", icon: "🔌" },
    ],
  },
  {
    title: "Infrastructure, Deployment & Tooling",
    icon: "🔧",
    skills: [
      { name: "Vite", level: "Experienced", icon: "⚡" },
      { name: "npm", level: "Skilled", icon: "📦" },
      { name: "ESLint", level: "Skilled", icon: "🔍" },
      { name: "Prettier", level: "Skilled", icon: "✨" },
      { name: "Vitest", level: "Experienced", icon: "🧪" },
      { name: "Playwright", level: "Experienced", icon: "🎭" },
      { name: "axe-core", level: "Experienced", icon: "♿" },
      { name: "Chrome DevTools", level: "Proficient", icon: "🔧" },
      { name: "Google Lighthouse", level: "Skilled", icon: "🏠" },
      { name: "Git", level: "Proficient", icon: "📚" },
      { name: "GitHub", level: "Proficient", icon: "🐙" },
      { name: "GitHub Actions (CI/CD)", level: "Experienced", icon: "🔄" },
      { name: "Vercel", level: "Experienced", icon: "▲" },
      { name: "GitHub Pages", level: "Experienced", icon: "📄" },
      { name: "Heroku", level: "Experienced", icon: "🚀" },
      { name: "AWS S3", level: "Experienced", icon: "☁️" },
      { name: "CloudFront", level: "Experienced", icon: "🌐" },
      { name: "DNS Setup & Management", level: "Experienced", icon: "🌍" },
    ],
  },
];

const allSkills: Skill[] = skillGroup.flatMap((group) => group.skills);

export type { Skill, SkillGroup };
export { skillGroup, allSkills };
