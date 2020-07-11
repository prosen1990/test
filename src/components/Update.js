import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: "#000000",
    };
  }

  decriss = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
    if (this.state.counter > 15) {
      this.setState({
        color: "#008000",
      });
    } else if (this.state.counter <= 15 && this.state.counter >= 6) {
      this.setState({
        color: "#000000",
      });
    } else if (this.state.counter <= 5 && this.state.counter >= 1) {
      this.setState({
        color: "#FFF700",
      });
    } else if (this.state.counter < 1) {
      this.setState({
        color: "#FF0000",
      });
    } else {
      this.setState({
        color: "#000000",
      });
    }
  };

  incriss = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < 1) {
      this.setState({
        color: "#FF0000",
      });
    } else if (this.state.counter >= 1 && this.state.counter <= 5) {
      this.setState({
        color: "#FFF700",
      });
    } else if (this.state.counter >= 6 && this.state.counter <= 15) {
      this.setState({
        color: "#000000",
      });
    } else if (this.state.counter > 15) {
      this.setState({
        color: "	#008000",
      });
    } else {
      this.setState({
        color: "	#000000",
      });
    }
  };
  render() {
    return (
      <div>
        <h1>
          <span className="btn btn-primary m-5" onClick={this.decriss}>
            -
          </span>
          <span style={{ color: this.state.color }}>{this.state.counter}</span>
          <span className="btn btn-primary m-5" onClick={this.incriss}>
            +
          </span>
        </h1>
      </div>
    );
  }
}

export default Update;
