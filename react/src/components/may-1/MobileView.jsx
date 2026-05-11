import React, { Component } from "react";
import "./MobileView.css";

class MobileView extends Component {
  render() {
    let { mobileList } = this.props;

    let mobile = mobileList.map((item) => {
      return (
        <div className="main" key={item.id}>
          <div className="section1">
            <img
              className="mobile-image"
              src={item.mobileUrl}
              alt={item.name}
            />
          </div>
          <div className="section2">
            <h3>{item.name}</h3>
            <p className="para">{item.about}</p>
            <div>
              <button className="book">Buy Now</button>
              <button className="book">Add to Cart</button>
            </div>
          </div>
        </div>
      );
    });
    return <div>{mobile}</div>;
  }
}

export default MobileView;
