import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      default: "text-base",
      md: "text-lg",
      lg: "text-2xl",
    },
    variantColor: {
      default: "text-inherit",
      black: "text-neutral-950",
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-white",
    },
    leading: {
      normal: "leading-[1.2]",
      soft: "leading-[1.5]",
      relaxed: "leading-[1.8]",
    },
  },
  defaultVariants: {
    size: "default",
    variantColor: "default",
    leading: "normal",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "strong" | "em";
}

const Text = ({
  children,
  className,
  size,
  variantColor,
  as = "p",
  ...props
}: TextProps) => {
  const Component = as;

  return (
    <Component
      className={cn(textVariants({ size, variantColor }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
