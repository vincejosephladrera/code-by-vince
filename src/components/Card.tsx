import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("card w-full rounded-[8px] bg-white p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
