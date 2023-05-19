import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, markTodoDone } from './todoSlice';

function TodoList() {
  const todos = useSelector(state => state.todos.items.filter(todo => !todo.done));
  const dispatch = useDispatch();

  function handleRemoveClick(id) {
    dispatch(removeTodo(id));
  }

  function handleMarkDoneClick(id) {
    dispatch(markTodoDone(id));
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleMarkDoneClick(todo.id)}>Done</button>
          <button onClick={() => handleRemoveClick(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

