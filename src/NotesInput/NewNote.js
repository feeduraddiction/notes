import React from 'react';
import InputField from './InputField';

const NewNote = ({ onAddNote }) => {
  const saveNoteHandler = (enteredNote) => {
    const noteText = {
      ...enteredNote,
      id: Math.random().toString(),
    };
    onAddNote(noteText);
  };
  return (
    <div className="new-note">
      <InputField onSaveNote={saveNoteHandler} />
    </div>
  );
};

export default NewNote;
