import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg" | "full";
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
}) {
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-[1400px]",
  };
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
