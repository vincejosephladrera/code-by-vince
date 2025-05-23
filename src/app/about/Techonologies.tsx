import Section from "@/components/Section";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Heading from "@/components/Heading";
import Image from "next/image";

const Technologies = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <Text className="mb-4">Tools and Skills</Text>
          <Heading as="h2">The Stack Behind the Magic</Heading>
        </div>
        <div className="grid grid-cols-8">
          <div>
            <Image
              src="/images/next-js.webp"
              alt="Next.js logo"
              width={64}
              height={64}
              className="mb-4"
            />
            <Text className="font-bold" size="lg">
              Next.js
            </Text>
          </div>
          <div>
            <Image
              src="/images/next-js.webp"
              alt="Next.js logo"
              width={64}
              height={64}
              className="mb-4"
            />
            <Text className="font-bold" size="lg">
              Ruby on Rails
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Technologies;
