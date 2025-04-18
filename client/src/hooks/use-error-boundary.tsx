import React, { useState, ReactNode } from 'react';
import ErrorBoundary from '@/components/error-boundary';

/**
 * Custom hook for using error boundaries in functional components
 * @param fallback Optional custom fallback UI
 * @returns Object with ErrorBoundary component and methods to handle errors
 */
export function useErrorBoundary(fallback?: ReactNode) {
  const [key, setKey] = useState(0);

  // Reset the error boundary by changing its key
  const reset = () => setKey(prevKey => prevKey + 1);

  // Component to wrap children with error boundary
  const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => (
    <ErrorBoundary key={key} fallback={fallback}>
      {children}
    </ErrorBoundary>
  );

  return {
    ErrorBoundaryWrapper,
    reset
  };
}

export default useErrorBoundary;
