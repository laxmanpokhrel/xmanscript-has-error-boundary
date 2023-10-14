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
            gap: '.3rem',
            width: 'full',
            height: 'full',
            background: '#ffe6e6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'start', gap: '.2rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <div style={{ display: 'flex', gap: '.1rem', alignItems: 'center' }}>
                <i className="material-symbols-outlined" style={{ fontSize: '1.2rem', color: '#ff1a1a' }}>
                  priority_high
                </i>
                <a href={errorLocation} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                  {fileName.split(' ')[1]} &rarr;
                </a>
              </div>
            </p>
            <div
              style={{
                display: 'flex',
                background: '#f0f0f5',
                paddingBlock: '2px',
                paddingInline: '8px',
              }}
            >
              {this.state.error?.message}
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

DefaultErrorBoundary.contextType = errorBoundaryContext; // Set the contextType property outside the class body

export default DefaultErrorBoundary;
