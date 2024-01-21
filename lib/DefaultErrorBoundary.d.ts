import * as React from 'react';
import { Component, ReactNode } from 'react';
interface ErrorBoundaryProps {
    showError?: boolean;
    children: ReactNode;
}
interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: object | null;
}
declare class DefaultErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: any, info: any): void;
    render(): string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined;
}
export default DefaultErrorBoundary;
