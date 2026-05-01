import React, { Component } from "react";
import "./MobileView.css";

class MobileView extends Component {
  render() {
    console.log("Props", this.props);
    let { mobiles } = this.props;

    let mobile = mobiles.map((value) => {
      return (
        <div className="main">
          <div className="section-one">
            <img className="mobile-image" src={value.url} alt="mobile-image" />
          </div>
          <div className="section-two">
            <h1>{value.name}</h1>
            <p className="para">{value.about}</p>
            <div>
            <button className="book">Buy Now</button>
            <button className="book">Add to watchlist</button>
          </div>
          </div>
          
        </div>
      );
    });
    return <div>{mobile}</div>;
  }
}

export default MobileView;
