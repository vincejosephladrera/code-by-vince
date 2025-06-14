import { Sword, Shield, Crown } from "lucide-react";
import type { JSX } from "react";

type PowerUp = {
  icon: JSX.Element;
  title: string;
  description: string;
  level: "Experienced" | "Proficient" | "Skilled" | "Familiar";
  iconColor: string;
  iconBg: string;
  buttonBg: string;
};

const powerUps: PowerUp[] = [
  {
    icon: <Sword className="h-10 w-10" />,
    title: "Frontend Mastery",
    description:
      "Expert level skills in Next.js, React, TypeScript, and modern CSS",
    level: "Experienced",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    buttonBg: "bg-primary",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Full Stack Potential",
    description:
      "Proficient in API integration, authentication, and database management",
    level: "Proficient",
    iconColor: "text-game-blue",
    iconBg: "bg-game-blue/20",
    buttonBg: "bg-game-blue",
  },
  {
    icon: <Crown className="h-10 w-10" />,
    title: "Performance Optimization",
    description:
      "Advanced abilities in code optimization and scalable architecture",
    level: "Experienced",
    iconColor: "text-game-purple",
    iconBg: "bg-game-purple/20",
    buttonBg: "bg-game-purple",
  },
];

export { powerUps };
