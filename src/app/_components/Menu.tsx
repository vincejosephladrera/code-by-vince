import { XIcon } from "lucide-react";
import MenuLink from "./MenuLink";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/about",
    text: "About",
    isDisabled: false,
  },
  {
    href: "/projects",
    text: "Projects",
    isDisabled: true,
  },
  {
    href: "/blogs",
    text: "Blogs",
    isDisabled: true,
  },
  {
    href: "/contact",
    text: "Contact",
    isDisabled: true,
  },
];

interface MenuProps {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isShown, setIsShown }: MenuProps) => {
  return (
    <div className={cn("menu", isShown && "menu--shown")}>
      <div className="flex h-[100svh] flex-col">
        <button
          className="ml-auto text-white hover:text-gray-400"
          role="button"
          aria-label="Close Menu"
          onClick={() => setIsShown(false)}
        >
          <XIcon size={32} />
        </button>
        <div className="my-auto flex flex-col gap-8 text-right">
          {links.map(({ href, text, isDisabled }) => (
            <MenuLink
              key={text}
              href={href}
              text={text}
              isDisabled={isDisabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
