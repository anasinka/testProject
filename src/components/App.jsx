import React from 'react';
import './app.css'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Registration from "./registration/Registration";

function App() {
  return (
        <div className='app'>
          { <BrowserRouter>
          <Switch>
               <Route path="/registration" component={Registration}/>
               </Switch> 
               </BrowserRouter>}
          </div>      
 );
}

export default App;
