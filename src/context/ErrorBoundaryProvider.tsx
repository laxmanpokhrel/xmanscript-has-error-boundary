/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import ErrorContext from './errorBoundaryContext';
import { ContextValueType, ErrorComponentType } from '../@types';

type HasErrorBoundaryPropsType = {
  errorComponent?: ErrorComponentType;
  children: React.ReactNode;
};
const ErrorBoundaryProvider = ({ errorComponent, children }: HasErrorBoundaryPropsType) => {
  const contextValue: ContextValueType = React.useMemo(
    () => ({
      errorComponent,
    }),
    []
  );

  return <ErrorContext.Provider value={contextValue}>{children || null}</ErrorContext.Provider>;
};

export default ErrorBoundaryProvider;
