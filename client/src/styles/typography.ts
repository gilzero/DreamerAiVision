import { cn } from "@/lib/utils";

/**
 * Typography system based on Apple's design aesthetic
 * Provides consistent text styling throughout the application
 */
export const typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
  heading: {
    h1: 'text-5xl md:text-6xl font-semibold tracking-tight leading-tight',
    h2: 'text-4xl md:text-5xl font-semibold tracking-tight leading-tight',
    h3: 'text-2xl md:text-3xl font-medium tracking-tight leading-tight',
    h4: 'text-xl md:text-2xl font-medium tracking-tight leading-tight',
  },
  body: {
    large: 'text-xl leading-relaxed font-normal',
    medium: 'text-base leading-relaxed font-normal',
    small: 'text-sm leading-relaxed font-normal',
    caption: 'text-xs leading-normal font-normal',
  },
  display: {
    large: 'text-7xl md:text-8xl font-semibold tracking-tighter leading-none',
    medium: 'text-6xl md:text-7xl font-semibold tracking-tighter leading-none',
  },
  serif: 'font-serif',
  colors: {
    primary: 'text-apple-gray-500',
    secondary: 'text-apple-gray-300',
    accent: 'text-apple-blue-primary',
  }
};

/**
 * Utility functions to apply typography styles with additional classes
 */
export const applyTypography = {
  heading: {
    h1: (className?: string) => cn(typography.heading.h1, className),
    h2: (className?: string) => cn(typography.heading.h2, className),
    h3: (className?: string) => cn(typography.heading.h3, className),
    h4: (className?: string) => cn(typography.heading.h4, className),
  },
  body: {
    large: (className?: string) => cn(typography.body.large, className),
    medium: (className?: string) => cn(typography.body.medium, className),
    small: (className?: string) => cn(typography.body.small, className),
    caption: (className?: string) => cn(typography.body.caption, className),
  },
  display: {
    large: (className?: string) => cn(typography.display.large, className),
    medium: (className?: string) => cn(typography.display.medium, className),
  }
};

// Apple's preferred easing curves for animations
export const appleEasing = [0.25, 0.1, 0.25, 1];
