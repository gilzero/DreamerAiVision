import * as React from "react";
import { cn } from "@/lib/utils";

export interface AppleTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const AppleTextarea = React.forwardRef<HTMLTextAreaElement, AppleTextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-apple-gray-500"
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-apple-lg border border-apple-gray-200 bg-white/80 px-4 py-3 text-sm text-apple-gray-500 transition-colors",
            "placeholder:text-apple-gray-300",
            "focus:border-apple-blue-primary focus:outline-none focus:ring-1 focus:ring-apple-blue-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none",
            error && "border-apple-accent-red focus:border-apple-accent-red focus:ring-apple-accent-red/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs text-apple-accent-red mt-1">{error}</p>
        )}
      </div>
    );
  }
);

AppleTextarea.displayName = "AppleTextarea";

export { AppleTextarea };
