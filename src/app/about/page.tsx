import { type Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About | Code By Vince",
};

const About = () => {
  return (
    <>
      <Section className="about-hero" padding="hero">
        <Container className="3xl:grid-cols-1 grid lg:grid-cols-2">
          <div className="about-sticky-content">
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
                <span className="text-primary">4+ Years</span>
              </Heading>
              <Text className="mb-6 leading-7">
                Frontend Developer with 4 years of web development experience (
                2 professionally ). Experienced in Next.js, React, and building
                scalable apps. Proficient in mentoring juniors and familiar with
                cloud storage, CDNs, and CI/CD (GitHub Actions). Passionate
                learner who loves Frontend Masters and unwinds with food vlogs
                and stand-up comedy. Open to freelance and full-time
                opportunities.
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
                      href="https://drive.google.com/file/d/1GZMmlPl9DYOe1XvClBqU0QKNlGGeiUIQ/view?usp=drive_link"
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
              className="about-decorative"
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
