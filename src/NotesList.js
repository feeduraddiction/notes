import React from 'react';
import SingleNote from './SingleNote';

const NotesList = ({ notes, onDeleteNotes }) => {
  console.log(onDeleteNotes);
  return (
    <div>
      {notes.map((element, index) => (
        <div className="single-note-general">
          <SingleNote
            note={element.note}
            key={element.id}
            id={element.id}
            // onGetIdToDel={getIdToDelHandler(element.id)}
          />
          <button
            type="button"
            id={element.id}
            className="single-note__control"
            onClick={() => onDeleteNotes(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
export default NotesList;
