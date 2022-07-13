import React, { useState } from 'react';

const App = () => {
  let count = 0;
  const [count2, setCount2] = useState(0);
  const increase = () => {
    count = count + 1;
    setCount2(count2 + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default App;
