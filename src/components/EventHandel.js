import React, { Component } from "react";

class EventHandel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  inputHandeler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.inputHandeler}
          type="text"
          placeholder="Enter your text hear"
        />
        <h1>Hello i am {this.state.name}</h1>
      </div>
    );
  }
}

export default EventHandel;
