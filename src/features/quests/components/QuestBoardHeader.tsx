import { Trophy } from "lucide-react";
import { allProjects } from "../data/allProjects";

const QuestBoardHeader = () => {
  return (
    <div className="border-primary/20 mb-16 rounded-2xl border-2 bg-white p-8 text-center shadow-lg">
      <div className="mb-6 flex items-center justify-center gap-3">
        <Trophy className="text-game-yellow h-12 w-12 animate-pulse" />
        <h1 className="text-game-slate text-5xl font-bold">Quest Board</h1>
        <Trophy className="text-game-yellow h-12 w-12 animate-pulse" />
      </div>
      <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
        A showcase of legendary quests completed and epic challenges conquered.
        Each project represents hours of dedication, problem-solving, and
        creative coding.
      </p>
      <div className="border-primary mx-auto max-w-fit rounded-lg border-2 bg-gray-50 p-4 shadow-md">
        <div className="text-game-primary text-2xl font-bold">
          {allProjects.length}
        </div>
        <div className="text-game-slate text-sm">Quests Completed</div>
      </div>

      {/* <div className="mx-auto grid max-w-2xl">
        <div className="border-primary rounded-lg border-2 bg-gray-50 p-4 shadow-md">
          <div className="text-game-primary text-2xl font-bold">
            {allProjects.length}
          </div>
          <div className="text-game-slate text-sm">Quests Completed</div>
        </div>
        <div className="border-secondary rounded-lg border-2 bg-gray-50 p-4 shadow-md">
          <div className="text-secondary text-2xl font-bold">5+</div>
          <div className="text-game-slate text-sm">Years Active</div>
        </div>
        <div className="border-game-purple rounded-lg border-2 bg-gray-50 p-4 shadow-md">
          <div className="text-game-purple text-2xl font-bold">40+</div>
          <div className="text-game-slate text-sm">Technologies</div>
        </div>
        <div className="border-game-yellow rounded-lg border-2 bg-gray-50 p-4 shadow-md">
          <div className="text-game-yellow text-2xl font-bold">
            {allProjects.length}
          </div>
          <div className="text-game-slate text-sm">Epic Achievements</div>
        </div>
      </div> */}
    </div>
  );
};

export default QuestBoardHeader;
