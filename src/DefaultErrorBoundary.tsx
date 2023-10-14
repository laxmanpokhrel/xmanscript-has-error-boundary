import * as React from 'react';
import { Component, ReactNode } from 'react';
import errorBoundaryContext from './context/errorBoundaryContext';
import { ContextValueType } from './@types';
import getFileNameAndLocation from './utils';

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
    const [fileName, errorLocation] = getFileNameAndLocation(this.state.errorInfo);
    if (this.state.errorInfo) {
      const contextProps = this.context as ContextValueType;

      if (contextProps?.errorComponent) {
        return contextProps.errorComponent({
          fileName,
          errorLocation,
          errorMessage: this.state.error?.message,
        });
      }

      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'start',
            padding: '.5rem',
            flexDirection: 'column',
            gap: '.3rem',
            width: 'full',
            height: 'full',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              {fileName}
              <a href={errorLocation} target="_blank" rel="noopener noreferrer">
                <i className="material-symbols-outlined">open_in_new</i>
              </a>
              : <div style={{ display: 'flex' }}>{this.state.error?.message}</div>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

DefaultErrorBoundary.contextType = errorBoundaryContext; // Set the contextType property outside the class body

export default DefaultErrorBoundary;
