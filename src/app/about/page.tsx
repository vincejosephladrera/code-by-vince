import { type Metadata } from "next";
import DeveloperSummary from "@/features/about/components/DeveloperSummary";
import SkillTree from "@/features/about/components/SkillsTree";
import GuildHistory from "@/features/about/components/GuildHistory";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About | Code By Vince",
};

const About = () => {
  return (
    <>
      <div className="py-20">
        <Container>
          <DeveloperSummary />
          <SkillTree />
          <GuildHistory />
        </Container>
      </div>
    </>
  );
};

export default About;
