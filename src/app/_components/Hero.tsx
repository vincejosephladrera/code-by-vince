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
            <nav className="mb-6 flex flex-col justify-center gap-4 md:flex-row">
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
            </nav>
          </div>
        </div>
        <picture>
          <source
            srcSet="/images/desktop-home-hero.webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/mobile-home-hero.webp"
            alt="decorative image"
            className="aspect-[787/416] h-auto w-full md:aspect-[1280/416]"
            width={787}
            height={416}
          />
        </picture>
      </Container>
    </Section>
  );
};

export default Hero;
