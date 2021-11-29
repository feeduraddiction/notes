import React from 'react';
import SingleNote from './SingleNote';

const NotesList = ({
  notes,
  onDeleteNotes,
  onSaveEditedNote,
// eslint-disable-next-line arrow-body-style
}) => {
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
