import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

export default function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pokemon/:id" component={Pokemon}/>
    </Switch>
  );
}