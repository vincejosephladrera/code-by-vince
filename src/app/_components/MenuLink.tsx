"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Heading from "../../components/Heading";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  href: string;
  text: string;
  isDisabled?: boolean;
}

const MenuLink = ({ href, text, isDisabled = false }: MenuLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        isDisabled
          ? "pointer-events-none text-neutral-500"
          : isActive
            ? "text-primary"
            : "text-white",
        "hover:text-gray-300",
      )}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
    >
      <Heading as="h2" size="sm">
        {text}
      </Heading>
    </Link>
  );
};

export default MenuLink;
