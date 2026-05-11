import React, { Component } from "react";

class CounterTwo extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }

    setCounter =() =>{
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.counter}</p>
                <button onClick={this.setCounter}>Click Me</button>
            </div>
        )
    }
}

export default CounterTwo;