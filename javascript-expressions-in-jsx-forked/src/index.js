import React from "react";
import ReactDOM from "react-dom";

const name = "Kim";
const lastName = "Thai";

ReactDOM.render(
  <>
    <h1>Hello {name + " " + lastName}</h1>
  </>,
  document.getElementById("root")
);
