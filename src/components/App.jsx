import React from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./registration/Registration";
import Base_notes from "./base_notes/Base_notes";

function App() {
  return (
    <div className="app">
      {
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Base_notes} />
            <Route path="/registration" component={Registration} />
            <Route path="/base_notes" component={Base_notes} />
          </Switch>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
