import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 active:scale-[0.97] will-change-transform",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent text-brand-primary hover:bg-brand-accent-soft hover:shadow-[0_8px_32px_-8px_rgb(85_196_139/0.45)]",
        dark:
          "bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_8px_32px_-8px_rgb(24_10_50/0.4)]",
        outline:
          "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        ghost: "text-brand-primary hover:bg-brand-violet-soft",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1FB155] hover:shadow-[0_8px_32px_-8px_rgb(37_211_102/0.5)]",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[15px]",
        lg: "h-14 px-9 text-base",
        xl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
