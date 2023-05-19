import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './todoSlice';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAddClick() {
    if (text.trim()) {
      const id = nanoid();
      const todo = { id, text, done: false };
      dispatch(addTodo(todo));
      setText('');
    }
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default AddTodo;

