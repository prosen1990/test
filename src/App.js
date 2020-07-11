// import React from "react";
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Hello from "./components/Hello";
// import Potol from "./components/Potol";
// import Welcome from "./components/Welcome";
// import Welcome2 from "./components/Welcome2";
// import Update from "./components/Update";
// import EventHandel from "./components/EventHandel";
import Books from "./components/Books/Books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: "JavaScript",
          price: 30,
          id: 1,
        },
        {
          name: "Learn React",
          price: 33,
          id: 2,
        },
        {
          name: "Learn Redax",
          price: 25,
          id: 3,
        },
        {
          name: "React Native",
          price: 20,
          id: 4,
        },
        {
          name: "Node Js",
          price: 50,
          id: 5,
        },
      ],
    };
  }
  deleteHandler = (id) => {
    let newBook = this.state.books.filter((book) => book.id != id);
    this.setState({ books: newBook });
  };

  render() {
    return (
      <div className="App">
        <Books
          deleteHandler={this.deleteHandler.bind(this)}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
