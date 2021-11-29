import React from 'react';
import NewNote from './NewNote';
import './App.css';
import NotesList from './NotesList';
import useNoteState from './useNoteState';
import HashTagsList from './HashTagsList';

const App = () => {
  const {
    notes,
    addNote,
    deleteNotes,
    saveEditedNote,
    filterNotes,
    restoreHashtags,
  } = useNoteState([]);
  console.log(notes);
  return (
    <div className="App">
      <NewNote
        onAddNote={addNote}
      />
      <HashTagsList
        notes={notes}
        onFilterNotes={filterNotes}
        onRestoreHashtags={restoreHashtags}
      />
      <NotesList
        notes={notes}
        onDeleteNotes={deleteNotes}
        onSaveEditedNote={saveEditedNote}
      />
    </div>
  );
};
export default App;
