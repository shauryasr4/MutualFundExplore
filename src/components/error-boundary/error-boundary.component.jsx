import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return <p>Something Went Wrong (Insert Better UI Here)</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
