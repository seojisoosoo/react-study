import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log('im herere!', inputValue);
    setTodoList([...todoList, inputValue]);
  };
  const deleteItem = () => {
    setTodoList([]);
  };
  return (
    <>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <button onClick={deleteItem}>삭제</button>
      <TodoBoard todoList={todoList} />
    </>
  );
};

export default App;
