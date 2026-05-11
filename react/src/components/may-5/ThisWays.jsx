import React, { Component } from "react";


class ThisWays extends Component {
    constructor() {
        super();
        this.state = {
            name: 'David',
        };
        // Ways to handle this keyword during a function call
        // this.handleClick = this.handleClick.bind(this);
        // or when you call the this.handleClick then add .bind(this) at the end 
    }

    // We can either use .bind(this) on a function or the second way is to define the function as an arrow
    // function and therefore doesn't need the .bind(this)
    // Arrow function internally handles this keyword on it's own
    handleClick = () =>{
        this.setState({name:'Ghost'});
    };

    render(){
        return(
            <div>
                <p>Name {this.state.name}</p>
                {/* We get an uncaught error if the handleClick is not bound to this */}
                {/* One of the ways to get the updated data on the screen ***this.handleClick.bind(this)*** */}
                <button onClick={this.handleClick}>Click Me</button>

            </div>
        )
    }
}

export default ThisWays;