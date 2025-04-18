/**
 * Color system based on Apple's design aesthetic
 * Provides consistent color palette throughout the application
 */
export const colors = {
  // Apple signature colors
  blue: {
    primary: '#0071e3',
    hover: '#0077ed',
    light: 'rgba(0, 113, 227, 0.1)',
  },
  gray: {
    50: '#f5f5f7',
    100: '#e8e8ed',
    200: '#d2d2d7',
    300: '#86868b',
    400: '#6e6e73',
    500: '#1d1d1f',
  },
  // Accent colors
  accent: {
    red: '#ff3b30',
    orange: '#ff9500',
    yellow: '#ffcc00',
    green: '#34c759',
    teal: '#5ac8fa',
    purple: '#af52de',
  },
  // Semantic colors
  semantic: {
    success: '#34c759',
    warning: '#ff9500',
    error: '#ff3b30',
    info: '#0071e3',
  },
  // Background colors
  background: {
    primary: '#ffffff',
    secondary: '#f5f5f7',
    tertiary: '#e8e8ed',
  }
};

/**
 * Opacity values for consistent transparency effects
 */
export const opacities = {
  subtle: 0.03,
  light: 0.1,
  medium: 0.3,
  strong: 0.7,
  solid: 1,
};

/**
 * Utility functions to get color values with opacity
 */
export const getColor = {
  blue: {
    primary: (opacity = opacities.solid) => opacity === 1 ? 'apple-blue-primary' : `apple-blue-primary/${opacity}`,
    hover: (opacity = opacities.solid) => opacity === 1 ? 'apple-blue-hover' : `apple-blue-hover/${opacity}`,
    light: (opacity = opacities.solid) => opacity === 1 ? 'apple-blue-light' : `apple-blue-light/${opacity}`,
  },
  gray: {
    50: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-50' : `apple-gray-50/${opacity}`,
    100: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-100' : `apple-gray-100/${opacity}`,
    200: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-200' : `apple-gray-200/${opacity}`,
    300: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-300' : `apple-gray-300/${opacity}`,
    400: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-400' : `apple-gray-400/${opacity}`,
    500: (opacity = opacities.solid) => opacity === 1 ? 'apple-gray-500' : `apple-gray-500/${opacity}`,
  },
  background: {
    primary: (opacity = opacities.solid) => opacity === 1 ? 'apple-background-primary' : `apple-background-primary/${opacity}`,
    secondary: (opacity = opacities.solid) => opacity === 1 ? 'apple-background-secondary' : `apple-background-secondary/${opacity}`,
    tertiary: (opacity = opacities.solid) => opacity === 1 ? 'apple-background-tertiary' : `apple-background-tertiary/${opacity}`,
  }
};
