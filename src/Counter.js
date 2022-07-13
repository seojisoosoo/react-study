import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  //   const increase = () => {
  //     setValue(value + 1);
  //   };
  return (
    <div>
      <p>현재 값은 {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      {/* <button onClick={increase}>+1</button> */}
    </div>
  );
};

export default Counter;
