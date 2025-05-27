import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "px-6 rounded-lg font-bold flex items-center justify-center whitespace-nowrap text-sm md:text-base",
  {
    variants: {
      variantColor: {
        primary: "bg-primary hover:bg-primary-light text-white",
        neutral: "bg-app-neutral-300 hover:bg-app-neutral-200 text-accent",
      },
      size: {
        normal: "h-[40px] md:h-[48px]",
      },
    },
    defaultVariants: {
      variantColor: "primary",
      size: "normal",
    },
  },
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
}

const Button = ({
  children,
  className,
  variantColor,
  label = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variantColor }), className)}
      {...props}
      role="button"
      aria-label={label}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
