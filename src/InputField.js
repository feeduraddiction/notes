import React, { useState } from 'react';
import './InputField.css';

const InputField = (props) => {
  const [enteredNote, setEnteredNote] = useState('');
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const note = { note: enteredNote };
    const { onSaveNote } = props;
    onSaveNote(note);
    setEnteredNote('');
  };

  return (
    <form onSubmit={submitHandler} className="input-field">
      <h1>Make some notes</h1>
      <input type="text" value={enteredNote} onChange={noteChangeHandler} />
    </form>
  );
};

export default InputField;
