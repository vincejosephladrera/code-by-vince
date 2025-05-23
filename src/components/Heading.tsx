import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("leading-[1.8]", {
  variants: {
    size: {
      default: "text-2xl md:text-5xl",
      sm: "text-lg md:text-2xl",
      xs: "text-base md:text-lg",
    },
    variantColor: {
      default: "text-inherit",
      black: "text-neutral-950",
      white: "text-white",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    variantWeight: {
      default: "font-bold",
    },
  },
  defaultVariants: {
    size: "default",
    variantColor: "default",
    variantWeight: "default",
  },
});

interface HeadingProp
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  as,
  className,
  children,
  size,
  variantColor,
  variantWeight,
  ...props
}: HeadingProp) => {
  const Component = as;

  return (
    <Component
      className={cn(
        headingVariants({ size, variantColor, variantWeight }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
