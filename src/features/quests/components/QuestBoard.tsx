import Container from "@/components/Container";
import QuestBoardHeader from "./QuestBoardHeader";
import QuestBoardDisplay from "./QuestBoardDisplay";

const QuestBoard = () => {
  return (
    <section className="py-20">
      <Container>
        <QuestBoardHeader />
        <QuestBoardDisplay />
      </Container>
    </section>
  );
};

export default QuestBoard;
