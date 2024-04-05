import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          // src="/public/yewt.png"
          src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/b0025d6f-fcf1-49fb-b6c4-91f2aa4be5fc.png?w=100&q=50" 
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>Nick's App with React + Django</h1>
      </div>
    );
  }
}

export default Header;