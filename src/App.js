// import {Fragment} from 'react';
// import "./App.css";

// function App() {
//   const name = "리액트";
//   return;
//   <>
//     <div className="react">{name}</div>
//     <input />
//     {/* 주석 */}
//   </>;
// }

// export default App;
// import MyComponent from './MyComponent';
import React, { useState } from 'react';
import './App.css';
import Box from './box.jsx';

function App() {
  let count = 0;
  const [count2, setCount2] = useState();
  const increase = () => {
    count = count + 1;
  };
  return (
    <main>
      {/* <Box name="지수" num="1" />
      <Box name="지원" num="2" />
      <Box name="선영" num="3" /> */}
      <div>{count}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
}
export default App;
