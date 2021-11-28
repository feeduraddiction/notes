import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ onSaveNote }) => {
  const findHashtags = (noteToFind) => {
    const regExp = /\B#\w\w+\b/g;
    const result = noteToFind.match(regExp);
    if (result) {
      return result;
    }
    return [''];
  };

  const [enteredNote, setEnteredNote] = useState('');
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const note = {
      note: enteredNote,
      hashtag: findHashtags(enteredNote),
    };
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
