import React from "react";
import { Route, Switch } from "react-router-dom";

import { ExplorePage } from "./pages/explore.page";
import { FundPage } from "./pages/detailed-fund.page";

import "./App.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={ExplorePage} />{" "}
            <Route exact path="/explore/:fundId" component={FundPage} />{" "}
          </ErrorBoundary>
        </Switch>
      </div>
    </div>
  );
}

export default App;
