import React from 'react';
import SingleNote from './SingleNote';
import './NotesList.scss';

const NotesList = ({
  notes,
  onSaveEditedNote,
  onDeleteNote,
// eslint-disable-next-line arrow-body-style
}) => {
  const deleteNoteHandler = (note) => {
    onDeleteNote(note);
  };
  const getDataToChange = (changedNote, number) => {
    onSaveEditedNote(changedNote, number);
  };

  return (
    <div className="notes-list">
      {notes.map((element, index) => (
        <div className="single-note-general" key={element.id}>
          <SingleNote
            note={element.note}
            id={element.id}
            index={index}
            onEditNote={onSaveEditedNote}
            onSaveChanges={getDataToChange}
          />
          <button
            type="button"
            id={element.id}
            className="single-note__delete"
            onClick={() => deleteNoteHandler(element)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};
export default NotesList;
