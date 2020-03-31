import React from "react";
import TodoList from "./components/TodoList";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import "./css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/todo" exact component={TodoList} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
