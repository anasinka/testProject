import React from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./registration/Registration";
import App from "./App";

const Router = () => {
  return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route path={"/registration"} component={Registration}/>  
            <Route path={"/App"} component={App}/>           
          </Switch>
        </BrowserRouter>      
  );
}

export default Router;
