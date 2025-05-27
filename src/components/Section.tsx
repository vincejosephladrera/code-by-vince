import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-8", {
  variants: {
    padding: {
      default: "md:py-20",
      hero: "py-0 md:pt-20",
      compact: "md:py-8",
      none: "",
    },
    variantColor: {
      default: "bg-white",
      primary: "bg-primary",
      accent: "bg-accent",
    },
  },
  defaultVariants: {
    padding: "default",
    variantColor: "default",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants>,
    React.RefAttributes<HTMLDivElement> {
  as?: "footer" | "section";
}

function Section({
  children,
  className,
  padding,
  variantColor,
  as = "section",
  ...props
}: SectionProps) {
  const Component = as;

  return (
    <Component
      className={cn(sectionVariants({ padding, variantColor }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;
