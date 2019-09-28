import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Transactions from "@components/Transactions";
import store from "./store";
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Transactions} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}
