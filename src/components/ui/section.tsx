import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 w-full", className)} {...props}>
      <div className="container max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
} 