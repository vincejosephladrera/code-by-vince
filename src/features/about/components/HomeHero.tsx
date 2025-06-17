"use client";
import { Crown, Zap, ArrowRight, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import Container from "@/components/Container";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-4">
              <div className="from-primary to-game-yellow flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-primary text-sm font-bold">
                  DEVELOPER STATUS
                </div>
                <div className="text-secondary text-lg font-bold">
                  Online & Ready to Code
                </div>
              </div>
            </div>
            <h1 className="text-secondary text-5xl leading-tight font-bold lg:text-6xl">
              Hi I&apos;m Vince
              <span className="text-primary block">Frontend Developer</span>
            </h1>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Development Journey</span>
                <span className="text-secondary font-bold">
                  4+ Years Active
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="from-primary to-game-yellow h-3 w-full rounded-full bg-gradient-to-r"></div>
              </div>
            </div>
            <p className="text-xl leading-relaxed">
              I&apos;m a frontend developer who crafts epic web experiences
              using the latest technologies. With years of experience and
              countless completed quests, I transform complex challenges into
              beautiful, functional applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="group grow px-8 py-6 text-lg font-bold"
              >
                <Link href="/projects">
                  <Crown className="mr-1 group-hover:animate-pulse" />
                  View Quests
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                color="secondary"
                size="lg"
                className="grow px-8 py-6 text-lg font-bold"
              >
                <Link href="/blogs">
                  <NotebookPen className="mr-1" />
                  Read Chronicles
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Card className="border-primary border-2 bg-white p-6 shadow-xl">
              <CardContent className="space-y-8 p-4">
                <h3 className="text-center text-2xl font-bold">
                  Developer Stats
                </h3>
                <Image
                  src="/images/home-hero-avatar.webp"
                  className="mx-auto block"
                  width={228}
                  height={171}
                  alt=""
                />
                <div className="grid grid-cols-2 gap-8">
                  <p className="grid grid-cols-1 gap-2 text-center">
                    <span className="text-primary text-2xl font-bold">30+</span>
                    <span className="text-sm">Projects Completed</span>
                  </p>
                  <p className="grid grid-cols-1 gap-2 text-center">
                    <span className="text-game-blue text-2xl font-bold">
                      4+
                    </span>
                    <span className="text-sm">Years Experience</span>
                  </p>
                  <p className="grid grid-cols-1 gap-2 text-center">
                    <span className="text-game-purple text-2xl font-bold">
                      40+
                    </span>
                    <span className="text-sm">Technologies</span>
                  </p>
                  <p className="grid grid-cols-1 gap-2 text-center">
                    <span className="text-game-green text-2xl font-bold">
                      ∞
                    </span>
                    <span className="text-sm">Coding Sessions</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
