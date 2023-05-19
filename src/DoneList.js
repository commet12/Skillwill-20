import React from 'react';
import { useSelector } from 'react-redux';

function DoneList() {
  const todos = useSelector(state => state.todos.items.filter(todo => todo.done));

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default DoneList;

