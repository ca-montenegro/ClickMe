import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Top from "./Top";
import Instrucciones from "./Instrucciones";

class Main extends Component {
  render() {
    return (
		
      <main>
    <Switch>
      <Route exact path='/jugar' component={Home}/>
      <Route path='/top' component={Top}/>
      <Route path='/' component={Instrucciones}/>
    </Switch>
  </main>
    );
  }
}

export default Main;
