import React from 'react';
import styled from 'styled-components';

const TodoBox = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid blue;
`;
const TodoItem = (props) => {
  return <TodoBox>{props.item}</TodoBox>;
};

export default TodoItem;
