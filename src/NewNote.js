import React from 'react';
import InputField from './InputField';

const NewNote = ({ onAddNote }) => {
  const saveNoteHandler = (enteredNote) => {
    const noteText = {
      ...enteredNote,
      id: Math.random().toString(),
    };
    onAddNote(noteText);
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteText),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // console.log(noteData);
  };
  return (
    <div className="new-note">
      <InputField onSaveNote={saveNoteHandler} />
    </div>
  );
};

export default NewNote;
