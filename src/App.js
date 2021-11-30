import React, { useEffect } from 'react';
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
  useEffect(() => {
    const url = 'http://localhost:3001/users';
    const fetchData = async () => {
      try {
        const response = await fetch(url, { mode: 'no-cors' });
        console.log(response);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

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
