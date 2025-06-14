import { Sword } from "lucide-react";
import { skillGroup } from "../data/skills";
import SkillCard from "./SkillCard";

const SkillTree = () => {
  return (
    <section className="border-game-blue/60 mb-16 gap-8 rounded-2xl border-2 bg-white p-4 shadow-lg md:p-8">
      <div className="mb-8 flex items-center justify-center gap-2">
        <Sword className="text-game-blue animate-pulse" size={28} />
        <h2 className="text-game-slate text-3xl font-bold">Skill Tree</h2>
      </div>
      <div className="grid gap-12">
        {skillGroup.map(({ title, icon, skills }) => (
          <section key={title}>
            <div className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <span>{icon}</span>
              <h3 className="text-game-slate">{title}</h3>
              {/* <div>{skills.length ?? 0} found</div> */}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default SkillTree;
