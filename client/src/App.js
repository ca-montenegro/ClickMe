//Me parece que tiene bien estructurado el proyecto, los componentes están bien definidos y modulados.
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  render() {
    return (
		
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
