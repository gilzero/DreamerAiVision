import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-apple-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue-primary disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-apple-blue-primary text-white hover:bg-apple-blue-hover shadow-apple-sm hover:shadow-apple active:scale-[0.98]",
        secondary: "bg-white text-apple-gray-500 border border-apple-gray-200 hover:border-apple-gray-300 shadow-apple-sm hover:shadow-apple active:scale-[0.98]",
        tertiary: "bg-apple-gray-50 text-apple-gray-500 hover:bg-apple-gray-100 active:scale-[0.98]",
        link: "text-apple-blue-primary underline-offset-4 hover:underline",
        ghost: "text-apple-gray-500 hover:bg-apple-gray-50 hover:text-apple-gray-500",
        destructive: "bg-apple-accent-red text-white hover:bg-red-600 shadow-apple-sm hover:shadow-apple active:scale-[0.98]",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-5",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const AppleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

AppleButton.displayName = "AppleButton";

export { AppleButton, buttonVariants };
