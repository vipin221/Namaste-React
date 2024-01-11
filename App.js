import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello Im Inside H1 Tag")
  )
);


const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h2", {}, "hello Im Inside H2 Tag"), React.createElement("h1", {}, "Sibling of H2")] 

  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(parent);
root1.render(parent2);
