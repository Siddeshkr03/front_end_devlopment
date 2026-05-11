import React, { Component } from "react";

class Mobile extends Component {
  constructor() {
    super();
    this.state = {
      age: 20,
    };
  }

  render() {
    // console.log("props", this.props);
    // console.log("props", this.props.name);
    console.log(this.props.city);
    console.log(this.props);
    const { name, city } = this.props; // Destructuring props to extract name and city
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>City: {city}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default Mobile;
