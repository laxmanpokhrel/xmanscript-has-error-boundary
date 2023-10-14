import * as React from 'react';
import { Component, ReactNode } from 'react';
import errorBoundaryContext from './context/errorBoundaryContext';
import { ContextValueType } from './@types';

interface ErrorBoundaryProps {
  showError?: boolean;
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: object | null;
}

class DefaultErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    errorInfo: null,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    if (this.props.showError === false) {
      this.state.error = null;
      this.state.errorInfo = null;
    }
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    if (this.state.errorInfo) {
      const contextProps = this.context as ContextValueType;

      if (contextProps?.errorComponent) {
        return contextProps.errorComponent({
          fileName: 'Your default file name',
          errorLocation: 'Your default error location',
        });
      }

      return (
        <div>
          <div>
            <i className="material-symbols-outlined">running_with_errors</i>
            <p> An Error Occurred !</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

DefaultErrorBoundary.contextType = errorBoundaryContext; // Set the contextType property outside the class body

export default DefaultErrorBoundary;
