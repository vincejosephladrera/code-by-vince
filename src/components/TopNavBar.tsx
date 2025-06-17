"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { navItems } from "@/data/navItems";
import Container from "./Container";

const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="border-primary shadow-primary/20 fixed top-0 left-0 z-50 h-[65px] w-screen border-b-4 bg-white py-2 shadow-lg">
        <Container className="flex items-center justify-between">
          <Link className="block w-fit" href="/">
            <Image src="/images/logo.webp" width={230} height={48} alt="logo" />
          </Link>
          {/* Mobile Nav */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="bg-primary/10 lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop Nav */}
          <nav className="hidden flex-wrap gap-4 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={cn(
                  "relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                  pathname === item.path
                    ? "bg-primary shadow-primary/30 text-white shadow-lg"
                    : "text-accent hover:bg-primary/90 hover:text-white",
                )}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </header>
      <nav
        className={cn(
          "bg-accent border-primary/30 fixed top-[65px] left-0 z-[40] w-screen py-4 text-white transition-transform lg:hidden",
          isOpen ? "" : "translate-y-[-100%]",
        )}
      >
        <Container className="grid grid-cols-1">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                pathname === item.path
                  ? "bg-game-primary shadow-game-primary/30 text-white shadow-lg"
                  : "text-game-yellow hover:bg-game-primary/90 hover:text-white",
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </>
  );
};

export default TopNavBar;
