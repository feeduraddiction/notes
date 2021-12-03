import React from 'react';
import SingleNote from './SingleNote';

const NotesList = ({
  notes,
  onSaveEditedNote,
// eslint-disable-next-line arrow-body-style
}) => {
  const testDeleteNotes = (note) => {
    console.log(note);
    fetch('http://localhost:3001/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
  };

  return (
    <div>
      {notes.map((element, index) => (
        <div className="single-note-general" key={element.id}>
          <SingleNote
            note={element.note}
            id={element.id}
            index={index}
            onEditNote={onSaveEditedNote}
          />
          <button
            type="button"
            id={element.id}
            className="single-note__control"
            onClick={() => testDeleteNotes(element)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
export default NotesList;
