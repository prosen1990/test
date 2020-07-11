import React, { Component } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Book extends Component {
  state = {
    isEditable: false,
  };
  render() {
    let output = this.state.isEditable ? (
      <input
        type="text"
        placeholder="Enter Name"
        value={this.props.book.name}
      />
    ) : (
      <p>{this.props.book.name}</p>
    );
    return (
      <li className="list-group-item d-flex">
        {output}
        <span className="ml-auto">${this.props.book.price}</span>
        <span
          className={"mx-2 btn btn-primary"}
          onClick={() => this.setState({ isEditable: true })}
        >
          Rename
        </span>
        <span
          className="mx-2 btn btn-primary"
          onClick={() => this.props.deleteHandler(this.props.book.id)}
        >
          Delete
        </span>
      </li>
    );
  }
}

export default Book;
