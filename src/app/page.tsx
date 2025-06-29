import HomeHero from "@/features/about/components/HomeHero";
import PowerUps from "@/features/about/components/PowerUps";
import EpicQuests from "@/features/quests/components/EpicQuests";
import DeveloperPreview from "@/features/about/components/DeveloperPreview";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <PowerUps />
      <DeveloperPreview />
      <EpicQuests />
    </>
  );
}
