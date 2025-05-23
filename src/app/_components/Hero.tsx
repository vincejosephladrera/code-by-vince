"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import Link from "next/link";
import useMobile from "@/hooks/useMobile";

const Hero = () => {
  const { isMobile } = useMobile();

  return (
    <Section padding="hero" className="hero">
      <Container className="flex h-full flex-col text-center">
        <div className="flex flex-1 items-center justify-center">
          <div>
            <Text size="md" variantColor="primary" className="mb-3 font-medium">
              Welcome ! Let’s Build Something Amazing
            </Text>
            <Heading
              as="h1"
              variantColor="secondary"
              className="mb-8 leading-[1.3]"
            >
              Hi I’m <span className="text-primary">Vince Ladrera</span>
              <br />
              Developer & Problem Solver
            </Heading>
            <div className="mb-6 flex flex-col justify-center gap-4 md:flex-row">
              <Link
                href="mailto:ladreravincejoseph@gmail.com"
                className={buttonVariants({ variantColor: "primary" })}
              >
                Let’s Build Together
              </Link>
              <Link
                href="/about"
                className={buttonVariants({ variantColor: "neutral" })}
              >
                Get to Know Me
              </Link>
            </div>
          </div>
        </div>
        <Image
          className="h-auto w-full"
          src={
            isMobile
              ? "/images/mobile-home-hero.webp"
              : "/images/desktop-home-hero.webp"
          }
          alt="decorative image"
          height={416}
          width={isMobile ? 787 : 1280}
        ></Image>
      </Container>
    </Section>
  );
};

export default Hero;
