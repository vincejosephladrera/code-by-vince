import { CardContent, Card } from "@/components/ui/card";
import { Heart, Zap, MapPin, Calendar } from "lucide-react";

const DeveloperSummary = () => {
  return (
    <section className="border-game-red/60 mb-16 grid grid-cols-1 items-center gap-8 rounded-2xl border-2 bg-white p-4 shadow-lg md:grid-cols-2 md:p-8">
      <div className="grid gap-6 text-xl leading-relaxed">
        <h1 className="text-game-slate text-5xl font-bold">Developer Stats</h1>
        <p>
          I&apos;m a passionate frontend developer with 4+ years of experience
          crafting epic web experiences. My journey started as a curious
          beginner and evolved into mastering the most challenging coding quests
          in the industry.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new
          technologies, contributing to open source projects, or sharing
          knowledge with fellow developers in the community. I believe every bug
          is just a mini-boss waiting to be defeated!
        </p>
        <div className="grid gap-2">
          <div className="gap- flex items-center gap-2">
            <MapPin className="shrink-0" />
            Quezon City, Philippines
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="shrink-0" />
            4+ years total of web development experience (2 years professional)
          </div>
        </div>
      </div>
      <div className="relative">
        <Card className="border-game-blue border-2 bg-white p-0 shadow-xl">
          <CardContent className="p-4 text-center md:p-8">
            <h3 className="text-game-slate mb-2 text-2xl font-bold">
              Vince Ladrera
            </h3>
            <p className="text-secondary mb-2">Class: Web Developer</p>
            <p className="text-secondary mb-4">
              Specialization: Front End Development
            </p>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="flex items-center justify-between text-sm font-bold text-red-500">
                  <div className="flex flex-nowrap items-center gap-2">
                    <Heart size={16} />
                    <span className="text-game-slate">Health</span>
                  </div>
                  <span>100/100</span>
                </div>
                <div className="relative h-3 w-full rounded-full border border-gray-600 bg-gray-800 shadow-inner">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 shadow-sm">
                    <div className="h-full w-full rounded-full bg-gradient-to-t from-red-700/50 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-between text-sm font-bold text-blue-500">
                  <div className="flex flex-nowrap items-center gap-2">
                    <Zap size={16} />
                    <span className="text-game-slate">Mana</span>
                  </div>
                  <span>100/100</span>
                </div>
                <div className="relative h-3 w-full rounded-full border border-gray-600 bg-gray-800 shadow-inner">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-sm">
                    <div className="h-full w-full rounded-full bg-gradient-to-t from-blue-700/50 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperSummary;
