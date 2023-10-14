import * as React from 'react';
import { ErrorComponentType } from '../@types';
type HasErrorBoundaryPropsType = {
    errorComponent: ErrorComponentType;
    children: React.ReactNode;
};
declare const ErrorBoundaryProvider: ({ errorComponent, children }: HasErrorBoundaryPropsType) => React.JSX.Element;
export default ErrorBoundaryProvider;
