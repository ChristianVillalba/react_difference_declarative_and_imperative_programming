import React from "react";

// DECLARATIVE PROGRAMMING
// function App() {
//   var isDone = true;
//   const strikeThrough = { textDecoration: "line-through" };
//   return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
// }

// IMPERATIVE PROGRAMMING
// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function unStrike() {
//   document.getElementById("root").style.textDecoration = null;
// }
// function App() {
//   return (
//     <div>
//       <p>Buy Milk</p>
//       <button onClick={strike}> Change to strike through </button>
//       <button onClick={unStrike}> Change Back </button>
//     </div>
//   );
// }

// Personal project: Render IMPERATIVE and DECLARATIVE
function strike() {
  document.getElementById("imperativeCoffeeTime").style.textDecoration =
    "line-through";
}
function unStrike() {
  document.getElementById("imperativeCoffeeTime").style.textDecoration = null;
}
function App() {
  const currentTime = new Date().getHours();
  const strikeThrough = { textDecoration: "line-through" };
  return (
    <div>
      <p>Declarative Programming</p>
      <h1 style={currentTime >= 13 ? strikeThrough : null}>Coffee Time</h1>
      <p>Imperative Programming</p>
      <h1 id="imperativeCoffeeTime">Coffee Time</h1>
      <button onClick={strike}> I had too much coffee today</button>
      <button onClick={unStrike}> Extend Coffee Time </button>
    </div>
  );
}

// This code won't work because we need something called HOOKS

// var isDone = false;

// function strike() {
//   isDone = true;
// }

// function unStrike() {
//   isDone = true;
// }

// function App() {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </div>
//   );
// }

export default App;
