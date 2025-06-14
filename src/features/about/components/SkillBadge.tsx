import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skillBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs text-white font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow,background] overflow-hidden border-transparent hover:bg-game-slate h-fit",
  {
    variants: {
      variant: {
        proficient: "bg-primary",
        skilled: "bg-game-blue",
        experienced: "bg-game-green",
        familiar: "bg-game-purple",
      },
    },
    defaultVariants: {
      variant: "experienced",
    },
  },
);

function SkillBadge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof skillBadgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(skillBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { SkillBadge, skillBadgeVariants };
