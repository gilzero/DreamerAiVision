import * as React from "react";
import { cn } from "@/lib/utils";

export interface AppleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const AppleInput = React.forwardRef<HTMLInputElement, AppleInputProps>(
  ({ className, type, label, error, ...props }, ref) => {
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
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-apple-lg border border-apple-gray-200 bg-white/80 px-4 py-2 text-sm text-apple-gray-500 transition-colors",
            "placeholder:text-apple-gray-300",
            "focus:border-apple-blue-primary focus:outline-none focus:ring-1 focus:ring-apple-blue-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
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

AppleInput.displayName = "AppleInput";

export { AppleInput };
