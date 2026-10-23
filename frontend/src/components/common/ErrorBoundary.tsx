import { Component, type ReactNode } from 'react';

interface State { hasError: boolean }

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch() {
    // A production reporter may be connected later; no sensitive details are rendered.
  }

  render() {
    if (this.state.hasError) {
      return <main className="fatal-state"><h1>Interface indisponible</h1><p>Rechargez la page ou réessayez plus tard.</p></main>;
    }
    return this.props.children;
  }
}

