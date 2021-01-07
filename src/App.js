import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import NotFound from "./components/NotFound";
import Ingredients from "./components/Ingredients";
import Welcome from "./components/Welcome";
import { pizzaProvider } from "./providers/pizzaProvider"
import { useEffect, useState } from 'react';


const App = () => {

  return (
    <pizzaProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/order/pizza" component={() => <Pizza Title="Pizza"/>} />
          <Route exact path="/order/calzone" component={() => <Pizza Title="Calzone"/>} />
          <Route path="/" component={NotFound}/>
        </Switch>                
      </Router>  
    </pizzaProvider>
      
  );
}

export default App;