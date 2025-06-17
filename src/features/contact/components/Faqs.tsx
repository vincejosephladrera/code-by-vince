import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { faqs } from "../data/faqs";
import { cn } from "@/lib/utils";

const Faqs = () => {
  return (
    <Card className="border-primary">
      <CardHeader>
        <CardTitle className="mb-6 flex items-center justify-center gap-1">
          <Zap className="text-game-yellow" />
          <h2 className="text-game-slate gap-2 text-2xl font-semibold">
            🤔 Quest FAQs
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {faqs.map(({ question, answer, color }) => (
          <Card className={cn(`border-${color}`, "mb-4")} key={question}>
            <CardContent>
              <h3 className={cn(`text-${color}`, "mb-2 font-medium")}>
                {question}
              </h3>
              <p>{answer}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Faqs;
