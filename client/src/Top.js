import React, { Component } from "react";
import "./App.css";

var car = {score:20, user:"500"};

class Top extends Component 
{
	constructor(props)
	{
		super(props);
		this.state={
			top:[car]}
	}

	componentDidMount()
	{
		let me = this;
		//"http://localhost:3000/api/savescore"
		fetch("/api/gettop")
			.then((res)=>{
					return res.json();
			})
			.then((json)=>{
				console.log(json);
				me.setState({top:json});
			})
	}

  render() {
    return (
		<div>
    <h1>
    	Top 10
    </h1> 
    	
		<div class="top">
	    	<ol>
	    		
	    	{this.state.top.map(
	    		(f)=>
	    		<li key={f.user+f.score}> 

		    		<div class="linea">
					    <div class="col-lg-4">{f.score}</div><div class="col-lg-6">{f.user}</div>
				  	</div>
			  	</li>
	    		)
	    	}
	    	</ol>
	    </div>

    </div>
    );
  }
}

export default Top;
