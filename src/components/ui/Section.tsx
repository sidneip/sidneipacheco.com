import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", className)}
      {...props}
    />
  );
}

export { Section };
export type { SectionProps };
