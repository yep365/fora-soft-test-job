import React from "react";
import { Route, Switch } from "react-router";

import { Layout } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/room/:roomId" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
