import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Do = (x) => {
  alert(x);
};

const Hello = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary m-1"
        onClick={Do.bind(this, "I am from f para")}
      >
        Click Me
      </button>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default Hello;
