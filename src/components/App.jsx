import React from "react";

// DECLARATIVE PROGRAMMING
// function App() {
//   var is Done = false;
//   const strikeThrough = {textDecoration: "line-through"}
//   return <p style={isDone && strikeThrough}>Buy Milk</p>
// }

// IMPERATIVE PROGRAMMING
// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function App() {
//   return(
//     <div>
//       <p>Buy Milk</p>
//       <button onClick={strike}> Change to strike through </button>
//     </div>
//   );
// }

// This code won't work because we need something called HOOKS

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
