import React from 'react';
import './index.css'; 
import Circle from "./Circle";

var Timer = require('easytimer.js');
var timerInstance = new Timer();


class Board extends React.Component 
{
constructor(props)
{
  super(props);
  this.state=
  {
    circleSize:120,
    time :timerInstance.getTimeValues().toString(),
    inGame:true
  };
  this.starTimer=this.startTimer.bind(this);
  this.update=this.update.bind(this);
}

handleClick() 
{
    var size = this.state.circleSize;
    size=size-15;
    console.log("maneja el click "+this.state.time);
    this.setState({circleSize: size});
    if(size===0)
    {
      var score = 1000/parseInt(timerInstance.getTimeValues().seconds,10)
      console.log(timerInstance );
      this.setState({inGame: false,
                      score:score});
      timerInstance.stop();
    }
}


componentDidMount()
{
  console.log("empieza el tiempo");
  timerInstance.start();
  this.startTimer();
}
startTimer()
{
  setInterval(this.update, 1000);
}
update()
{
  this.setState({
    time :timerInstance.getTimeValues().toString()
  });
}

  renderCircle(left,top) {
    return (<Circle 
            left={left} 
            top={top} 
            size={this.state.circleSize}
            onClick={() => this.handleClick()}
            />);
  }
  render() {
    let endgame;
    const status = this.state.time;

    if(!this.state.inGame){
      endgame = (
        
        <div className="endgame">

          <p>Gracias por jugar!</p>
          <img id="feliz" src="https://userscontent2.emaze.com/images/84e5aa12-1b11-497b-8be8-2a62690258ff/999796f9-19d0-4e0a-b6eb-ab434e9c7730.jpg" alt="happy face"/>
          <p>Sube tu puntaje!</p>
          <form action="/api/savescore" method="post">
          <p>
          Puntaje: {Math.floor(this.state.score)}<br/>
          Usuario: <input type="text" name="user" />
          </p>
          <input type="hidden" name ="score" value={Math.floor(this.state.score)}/>
          <br/>
          <input type="submit" value="Subir"/>
          </form> 
        </div>
      )
    }

    return (
      <div>
        { endgame }
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCircle(100,200)}        

        </div>
      </div>
    );
  }
}

class Game extends React.Component 
{
  render() 
  {

    return (
          <Board />
    );
  }
}

export default Game;
