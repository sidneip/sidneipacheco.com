import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-6xl px-6", className)} {...props} />
  );
}

export { Container };
export type { ContainerProps };
