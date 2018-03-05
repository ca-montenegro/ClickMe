import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Instrucciones extends Component 
{
	

  render() {
    return (

		<div>

		<p>
			<pre>
			Este juego te permitirá mejorar tus habilidades con el mouse </pre>
			<pre>
			solamente debes hacer click en los circulos de colores.
			</pre>
			Coloca tu mano en el mouse y dale click a la imágen cuando estes listo.
		</p>
			<Link to='/jugar'>
						<img src="https://media.giphy.com/media/65PLAPyMkqLUOL2sdO/giphy.gif" alt="Mountain View"/>
			</Link>
		</div>

    );
  }
}

export default Instrucciones;
