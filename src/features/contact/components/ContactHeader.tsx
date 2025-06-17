import Container from "@/components/Container";
import { Users } from "lucide-react";

const ContactHeader = () => {
  return (
    <section>
      <Container>
        <div className="border-primary/20 mb-16 rounded-2xl border-2 bg-white p-8 text-center shadow-lg">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Users className="text-game-purple h-12 w-12 animate-pulse" />
            <h1 className="text-game-slate text-5xl font-bold">Quest Board</h1>
            <Users className="text-game-purple h-12 w-12 animate-pulse" />
          </div>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Ready to embark on an epic coding adventure? I&apos;m always excited
            to team up with fellow developers, tackle challenging quests, and
            create legendary web experiences together!
          </p>
          <div className="border-primary mx-auto grid max-w-md gap-4 rounded-lg border-2 bg-gray-50 p-6 shadow-lg">
            <p>🟢 Online & Ready for Quests</p>
            <p>⚡ Usually responds within 24 hours</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHeader;
