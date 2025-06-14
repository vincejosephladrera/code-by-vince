import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { JSX } from "react";

interface PowerUpCardProps {
  iconBg: string;
  iconColor: string;
  buttonBg: string;
  icon: JSX.Element;
  title: string;
  description: string;
  level: "Experienced" | "Proficient" | "Skilled" | "Familiar";
}

const PowerUpCard = ({
  iconBg,
  iconColor,
  buttonBg,
  icon,
  title,
  description,
  level,
}: PowerUpCardProps) => {
  return (
    <Card className="group hover:shadow-primary/20 hover:border-primary border-2 border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-8 text-center">
        <div
          className={cn(
            "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110",
            iconColor,
            iconBg,
          )}
        >
          {icon}
        </div>
        <h3 className="text-game-slate group-hover:text-primary mb-4 text-xl font-bold">
          {title}
        </h3>
        <p className="mb-6 text-gray-600">{description}</p>

        <div className="flex justify-center">
          <span
            className={cn(
              "rounded-full px-4 py-2 font-bold text-white",
              buttonBg,
            )}
          >
            {level}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PowerUpCard;
