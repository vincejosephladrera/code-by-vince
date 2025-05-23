import Image from "next/image";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Heading from "@/components/Heading";
import Timeline from "./Timeline";
import { buttonVariants } from "@/components/Button";
import { FileUserIcon } from "lucide-react";
import { LinkedInIcon } from "@/components/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";
import { cn } from "@/lib/utils";
import Competencies from "./Competencies";
import Link from "next/link";
// import Technologies from "./Techonologies";

const About = () => {
  return (
    <>
      <Section className="!p-0" padding="hero">
        <Container className="grid gap-y-6 lg:grid-cols-2">
          <div
            className={cn(
              "lg:sticky",
              "about-sticky-content top-[136px] flex flex-col justify-between self-start",
            )}
          >
            <div>
              <Text
                variantColor="primary"
                leading="relaxed"
                size="md"
                className="mb-3 font-medium"
              >
                Get To Know Me
              </Text>
              <Heading
                as="h1"
                variantColor="secondary"
                className="mb-4 leading-[1.3]"
              >
                Crafting Solutions in Code for{" "}
                <span className="text-primary">3+ Years</span>
              </Heading>
              <Text className="mb-3">
                I&apos;m a Web Developer specializing in front-end development,
                with a strong focus on building responsive, accessible, and
                user-first interfaces. While my expertise lies in crafting
                engaging front-end experiences, I also have hands-on experience
                in back-end development—designing RESTful APIs and structuring
                efficient database schemas. This full-spectrum understanding
                helps me build applications that are not only visually polished
                but also scalable and well-architected behind the scenes.
              </Text>
              <Text className="mb-6">
                Open to freelance and full-time opportunities where I can create
                impact and continue to grow. Let’s connect if you have a project
                in mind!
              </Text>
              <div className="flex-start flex items-center gap-3">
                <Link
                  href="mailto:ladreravincejoseph@gmail.com"
                  className={buttonVariants({ variantColor: "primary" })}
                >
                  Let&apos;s Build Together
                </Link>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://drive.google.com/file/d/1lfUi1H-1TrO0TH84t7PtEoLWu2Jl3-tS/view?usp=drive_link"
                      target="_blank"
                    >
                      <FileUserIcon className="text-secondary" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" arrow={false}>
                    <p>View CV</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.linkedin.com/in/ladreravincejoseph"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" arrow={false}>
                    <p>Connect with me on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <Image
              className="w-full"
              src="/images/about-hero-graphics.webp"
              alt="decorative image"
              width={616}
              height={289}
            />
          </div>
          <Timeline />
        </Container>
      </Section>
      <Competencies />
      {/* <Technologies/> */}
    </>
  );
};

export default About;
