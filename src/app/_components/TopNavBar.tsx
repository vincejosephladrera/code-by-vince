"use client";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

const TopNavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsShown(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "border-b-accent fixed top-0 right-0 z-50 flex h-[96px] w-screen items-center border-b bg-white",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/">
            <Image src="/images/logo.webp" width={230} height={48} alt="logo" />
          </Link>
          <button
            className="hover:text-gray-400"
            role="button"
            aria-label="Open Menu"
            onClick={() => setIsShown((state) => !state)}
          >
            <MenuIcon size={32} />
          </button>
        </div>
      </header>
      <Menu isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default TopNavBar;
