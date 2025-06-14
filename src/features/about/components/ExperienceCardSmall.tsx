import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Experience } from "../data/experience";

const ExperienceCardSmall = ({ title, company }: Experience) => {
  return (
    <Card className="border-primary border-l-4">
      <CardContent>
        <div className="flex justify-between">
          <div className="grid text-left">
            <CardTitle>
              <h3 className="text-game-slate font-bold">{title}</h3>
            </CardTitle>
            <p className="text-primary text-sm font-medium">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCardSmall;
