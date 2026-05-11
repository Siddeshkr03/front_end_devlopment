import React, { Component } from "react";

class Event extends Component{
    constructor() {
        super();
        this.state = {
            name: "Donald",
        };
    }
    // The below method's syntax is okay for class components but not functional components
    handleClick(){
        console.log('this contains',this);
        this.setState({ name:'Johnson'});
    }

    render() {
        return (
            <div>
                {/* <h1>Name: {this.state.name}</h1> */}
                <button onClick={this.handleClick.bind(this)}>Click Me!</button>
            </div>
        );
    }
}

export default Event;