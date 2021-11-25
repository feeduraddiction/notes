import React from 'react';
import NewNote from './NewNote';
import './App.css';
import NotesList from './NotesList';
import useNoteState from './useNoteState';

const App = () => {
  const { notes, addNote, deleteNotes } = useNoteState([]);
  return (
    <div className="App">
      <NewNote onAddNote={addNote} />
      <NotesList notes={notes} onDeleteNotes={deleteNotes} />
    </div>
  );
};
export default App;
