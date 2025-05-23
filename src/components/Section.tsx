import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-8", {
  variants: {
    padding: {
      default: "md:py-20",
      hero: "md:py-[80px]",
      compact: "md:py-8",
    },
    variantColor: {
      default: "bg-white",
      primary: "bg-primary",
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
    React.RefAttributes<HTMLDivElement> {}

function Section({
  children,
  className,
  padding,
  variantColor,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ padding, variantColor }), className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
