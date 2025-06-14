import PowerUpCard from "./PowerUpCard";
import { Shield, Sword, Crown } from "lucide-react";
import type { JSX } from "react";
import Container from "@/components/Container";

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

const PowerUps = () => {
  return (
    <section className="border-game-red/50 border-t-4 bg-gray-50 px-4 py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 flex items-center justify-center gap-2 font-bold">
            <span className="text-game-red text-4xl">Power-Ups Equipped</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl">
            My current loadout of development skills and abilities, each honed
            through countless hours of practice and real-world quests.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {powerUps.map((powerUp) => (
            <PowerUpCard key={powerUp.title} {...powerUp} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PowerUps;
