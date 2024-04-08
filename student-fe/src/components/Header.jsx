import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          // src="/public/yewt.png"
          alt="Header Image"
          src="https://images.freeimages.com/images/large-previews/fb0/double-header-1388142.jpg?fmt=webp&h=350" 
          width="400"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>Hello from the front-end React site!</i>
        </h5>
        <h1>Nick's App with React FE + Django BE API</h1>
      </div>
    );
  }
}

export default Header;