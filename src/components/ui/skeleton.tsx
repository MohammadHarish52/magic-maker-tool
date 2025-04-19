import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-200/70 dark:bg-neutral-800/70",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
