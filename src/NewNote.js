import React from 'react';
import InputField from './InputField';

const NewNote = (props) => {
  const saveNoteHandler = (enteredNote) => {
    const noteText = {
      ...enteredNote,
      id: Math.random().toString(),
    };
    const { onAddNote } = props;
    onAddNote(noteText);
    // console.log(noteData);
  };
  return (
    <div className="new-note">
      <InputField onSaveNote={saveNoteHandler} />
    </div>
  );
};

export default NewNote;
