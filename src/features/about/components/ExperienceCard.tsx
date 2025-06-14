import type { Experience } from "../data/experience";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: Experience) => {
  return (
    <Card className="border-primary/20 hover:border-primary/40 flex-1 border-2 bg-white shadow-lg transition-shadow hover:shadow-xl">
      <CardHeader className="px-4 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="grid gap-2">
            <CardTitle className="text-game-slate text-2xl">{title}</CardTitle>
            {company && (
              <p className="text-primary flex items-center gap-2 text-lg font-bold">
                <span className="text-2xl">🏢</span>
                <span>{company}</span>
              </p>
            )}
          </div>
          <div className="bg-game-blue flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white">
            <Calendar size={16} />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        {typeof description === "string" ? (
          <p className="mb-6 text-lg leading-relaxed">{description}</p>
        ) : (
          description
        )}

        {/* <div className="flex items-center justify-between">
          <div className="bg-game-primary/10 text-game-primary border-game-primary/30 rounded-lg border px-4 py-2 text-sm font-bold">
            🎯 {achievement}
          </div>
          <div className="text-game-yellow text-lg font-bold">{badge}</div>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
