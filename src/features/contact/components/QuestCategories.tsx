import { Card, CardContent } from "@/components/ui/card";
import { questTypes } from "../data/questTypes";

const QuestCategories = () => {
  return (
    <Card className="border-primary">
      <CardContent>
        <h2 className="text-game-slate mb-6 gap-2 text-2xl font-semibold">
          ⚔️ Quests I Accept
        </h2>
        {questTypes.map(({ label, description }) => (
          <Card className="mb-4" key={label}>
            <CardContent>
              <p className="text-game-slate mb-2 text-sm font-medium">
                {label}
              </p>
              <p className="text-xs">{description}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestCategories;
