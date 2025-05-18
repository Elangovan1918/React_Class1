import React from "react";
import First from "./Components/First";
import Hero from "./Components/Hero";

//Example 1: JSX Code in Curly Braces

// const name="Learner"
// const App = () => {
//   return (
//     <div>
//       <h1>Hello,{name}</h1>
//     </div>
//   )
// }

// export default App

// Example 2: JSX Code In Conditional Express

let i = 1;
const App = () => {
  return (
    <div>
      {<h3>This React Practice</h3>}
      <h1>{i == 1 ? "Hello world" : "false"}</h1>
      <First />
      <Hero/>
    </div>
  );
};

export default App;
