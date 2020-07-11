import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Potol extends Component {
  DoThis(a) {
    alert(a);
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.DoThis.bind(this, "I am from class para")}
        >
          ClickClass
        </button>
        <h1>Name: {this.props.name}</h1>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default Potol;
