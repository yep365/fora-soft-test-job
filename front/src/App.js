import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { useSelector } from "react-redux";

import { Layout } from "./components";

function App() {
  const { roomId } = useSelector(({ rooms }) => rooms);

  //If user didn't go by exact link, then it creates a new room for him
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
