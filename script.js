/**
 * ex1 ->>
 * <div id="parent">
 *       <div id="child">
 *           <h1>hello Im H1 tag</h1>
 *      </div>
 * </div>
 */

// creating like above

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello Im Inside H1 Tag")
  )
);

/* ex2 -->>
 * <div id="parent">
 *       <div id="child">
 *           <h1>Hello Im H1 tag</h1>
 *           <h1> Hello Im sibling of H1 tag</h1>
 *      </div>
 * </div>
 *
 */
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h2", {}, "hello Im Inside H2 Tag"), React.createElement("h1", {}, "Sibling of H2")] 
    // for creating sibling element pass it like array
  )
);

// const heading = React.createElement("h1", {}, "Hello World From React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(parent);
root1.render(parent2);
