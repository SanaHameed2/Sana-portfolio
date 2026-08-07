import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
              <div className="mb-6 text-6xl" aria-hidden="true">
                ⚠️
              </div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-50">Something went wrong</h2>
              <p className="mb-6 text-body text-neutral-200">
                We're sorry, but something went wrong. Please try refreshing the page.
              </p>
              <div className="mb-6 rounded-2xl border border-border bg-white/5 p-4 text-left">
                <p className="break-all font-mono text-small text-red-400">
                  {this.state.error?.message || 'Unknown error'}
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="rounded-button bg-primary px-6 py-3 font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
