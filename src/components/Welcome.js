import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prosenjit mondal",
      age: "30",
      occupation: "Teacher",
      address: {
        vill: "Kakemary",
        pos: "Shous",
        Thana: "Dumuria",
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.address.vill}</h1>
      </div>
    );
  }
}

export default Welcome;
