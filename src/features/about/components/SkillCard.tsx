import type { Skill } from "../data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { SkillBadge } from "./SkillBadge";
import type { skillBadgeVariants } from "./SkillBadge";
import type { VariantProps } from "class-variance-authority";

type SkillBadgeVariant = VariantProps<typeof skillBadgeVariants>["variant"];

const SkillCard = ({ icon, name, level }: Skill) => {
  const variant = level.toLowerCase() as SkillBadgeVariant;

  return (
    <Card>
      <CardContent className="px-4 md:px-6">
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex gap-2">
            <span>{icon}</span>
            <span>{name}</span>
          </div>
          <SkillBadge variant={variant}>{level}</SkillBadge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
