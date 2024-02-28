import React from 'react';
import ErrorBoundaryProvider from './context/ErrorBoundaryProvider';
import { GoodComponent } from './@types';
/**
 * This is a higher-order function that wraps a React component with an error boundary.
 * @param WrappedComponent - a React component that will be wrapped with an error boundary.
 * @returns The `hasErrorBoundary` function returns a higher-order component that wraps the
 * `WrappedComponent` with an `ErrorBoundary` component. The `ErrorBoundaryWrapper` function is the
 * actual higher-order component that takes in `props` and returns the `ErrorBoundary` component with
 * the `WrappedComponent` passed as a child with the `props` spread into it.
 */
declare function hasErrorBoundary<T>(WrappedComponent: React.ComponentType<React.PropsWithChildren<React.PropsWithChildren<T>>>): GoodComponent<T>;
export { hasErrorBoundary, ErrorBoundaryProvider };
