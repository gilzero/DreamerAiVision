import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-apple-lg border border-apple-gray-100 bg-white shadow-apple transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white/80 backdrop-blur-md hover:shadow-apple-md",
        glass: "bg-white/60 backdrop-blur-xl border-white/20 hover:shadow-apple-md",
        solid: "bg-white hover:shadow-apple-md",
        elevated: "shadow-apple-md hover:shadow-apple-lg",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-apple-md",
        scale: "hover:scale-[1.02] hover:shadow-apple-md",
        border: "hover:border-apple-blue-primary/30",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: "none",
    },
  }
);

export interface AppleCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const AppleCard = React.forwardRef<HTMLDivElement, AppleCardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover, className }))}
        {...props}
      />
    );
  }
);

AppleCard.displayName = "AppleCard";

const AppleCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));

AppleCardHeader.displayName = "AppleCardHeader";

const AppleCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-tight tracking-tight text-apple-gray-500",
      className
    )}
    {...props}
  />
));

AppleCardTitle.displayName = "AppleCardTitle";

const AppleCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-apple-gray-300", className)}
    {...props}
  />
));

AppleCardDescription.displayName = "AppleCardDescription";

const AppleCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));

AppleCardContent.displayName = "AppleCardContent";

const AppleCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));

AppleCardFooter.displayName = "AppleCardFooter";

export {
  AppleCard,
  AppleCardHeader,
  AppleCardTitle,
  AppleCardDescription,
  AppleCardContent,
  AppleCardFooter,
};
