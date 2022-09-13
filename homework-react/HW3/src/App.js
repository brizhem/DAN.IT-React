import React from "react";
import Header from "./components/Header";
import { HomePage, BasketPage, ArchivePage } from "./pages";
import "./App.scss";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/basket" component={BasketPage} />
        <Route path="/archive" component={ArchivePage} />
      </Switch>
    </>
  );
};

export default App;
