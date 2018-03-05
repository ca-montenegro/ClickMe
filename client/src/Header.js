import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
		
      <header>
	    <nav>
	      <ul>
	        <li><Link to='/instrucciones'>Instrucciones</Link></li>
	        <li><Link to='/jugar'>Jugar</Link></li>
	        <li><Link to='/top'>Mejores puntajes</Link></li>
	      </ul>
	    </nav>
  	</header>
    );
  }
}

export default Header;