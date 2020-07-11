import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Welcome2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "shilpy das",
      age: " 29",
    };
  }
  go(a) {
    this.setState({ name: a });
  }

  render() {
    return (
      <div>
        <h2 className="m-5">{this.state.name}</h2>
        <button
          className="btm btn-primary"
          onClick={this.go.bind(this, " I am from Welcome 2")}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Welcome2;
