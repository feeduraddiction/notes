import React, { useState } from 'react';
import '../Styles/InputField.scss';

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
    if (!enteredNote) {
      alert('not empty plz');
    } else if (enteredNote.length > 1000) {
      alert('not so big plz (less than 1k symbols)');
    } else {
      event.preventDefault();
      const note = {
        note: enteredNote,
        hashtag: findHashtags(enteredNote),
      };
      onSaveNote(note);
      setEnteredNote('');
    }
  };

  return (
    <form onSubmit={submitHandler} className="input-field">
      <h1>make some notes.</h1>
      <input type="text" value={enteredNote} onChange={noteChangeHandler} placeholder="don't forget to brush your teeth" />
    </form>
  );
};

export default InputField;
