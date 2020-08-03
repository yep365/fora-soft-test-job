import React from "react";
import { Route, Switch, useLocation, Redirect } from "react-router";
import { useSelector } from "react-redux";

import { Layout } from "./components";

function App() {
  const { roomId } = useSelector(({ rooms }) => rooms);

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/room/:roomId" component={Layout} />
        <Route
          path="/"
          render={() =>
            roomId !== null ? <Redirect to={`/room/${roomId}`} /> : <Layout />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
