import { Trophy } from "lucide-react";
import { experience } from "../data/experience";

import ExperienceCard from "./ExperienceCard";

const GuildHistory = () => {
  return (
    <section className="border-game-green/40 mb-16 rounded-2xl border-2 p-4 md:p-8">
      <h2 className="text-game-slate mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold">
        <Trophy className="text-game-yellow h-8 w-8 animate-pulse" />
        Guild History
      </h2>
      <div className="grid gap-4">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default GuildHistory;
