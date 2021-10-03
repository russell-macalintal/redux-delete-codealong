import React from 'react';

const Todo = props => {
  return (
    <li>
      <span>{props.todo.text}</span>
      
      {/* Method 1: Delete per array index number (assigned as the todo's key) */}
      {/* <button onClick={() => props.delete(props.todoKey)}>DELETE</button> */}

      {/* Method 2: Delete per unique ID provided by uuid */}
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </li>
  );
};

export default Todo;