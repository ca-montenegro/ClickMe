import React from 'react';
import './index.css'; 
import styled from 'styled-components';
export default class Circle extends React.Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      black:1,
      count:0,
      left:props.left,
      top:props.top,
      size:props.size,
      width: window.innerWidth,
      height: window.innerHeight,
      gameEnd:props.gameEnd
    }
  }
  render() {
  
  var colors =['blue','red','transparent'];
  var Button = styled.button`
  border-radius: 50%;
  width: ${this.state.size}px;
  height: ${this.state.size}px;
  background-color: ${colors[(this.state.black)] };
  position: absolute;
  left:${this.state.left}px;
  top: ${this.state.top}px;
  color: transparent; 
  border-color: transparent;
`;


  var random = (max)=>Math.floor(Math.random()*max);

    return (
      <Button onClick=
      {() =>{
              //alert('width '+this.state.width+" height: "+this.state.height);
              this.setState(
                {
                  size:this.state.size-15,
                  top: 50+random(this.state.height) ,
                  left: random(this.state.width),
                  black:this.state.size===15 ? 2 : (this.state.black+1)%2
                });
              this.props.onClick();

            } 
      }
    ></Button>
    );
  }
}