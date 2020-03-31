import React from "react";
import TodoList from "./components/TodoList";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import "./css/bootstrap.min.css";
import AddressComponent from "./components/AddressComponent";
import DetailAddressComponent from "./components/DetailAddressComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/todo" exact component={TodoList} />
        <Route path="/address" component={AddressComponent} />
        <Route path="/detailAddress/:name" component={DetailAddressComponent} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
