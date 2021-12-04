import React, { useEffect, useState } from 'react';
import NewNote from './NewNote';
import './App.css';
import NotesList from './NotesList';
import HashTagsList from './HashTagsList';
import fetchData from './FetchData';

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchData(setNotes);
  }, []);

  const filteredHashtagsHandler = (props) => {
    const filteredNotes = Object.values(notes).filter((singleNote) => singleNote.note
      .includes(props));
    setNotes(filteredNotes);
  };

  const restoreHashtahsHandler = () => {
    fetchData(setNotes);
  };

  const addNote = (newNote) => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((request) => request.json()
        .then((json) => setNotes(json)));
  };

  const deleteNoteHandler = (noteToDelete) => {
    fetch(`http://localhost:3001/users/${noteToDelete.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((request) => request.json()
        .then((json) => setNotes(json)));
  };

  const findHashtags = (noteToFind) => {
    const regExp = /\B#\w\w+\b/g;
    const result = noteToFind.match(regExp);
    if (result) {
      return result;
    }
    return [''];
  };

  const saveEditedNoteHandler = (editedNote, id) => {
    console.log(editedNote, id);
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note: editedNote,
        hashtag: findHashtags(editedNote),
      }),
    })
      .then((request) => request.json()
        .then((json) => setNotes(json)));
  };

  return (
    <div className="App">
      <NewNote
        onAddNote={addNote}
      />
      <HashTagsList
        notes={Object.values(notes)}
        onHashtagFilter={filteredHashtagsHandler}
        onRestoreHashtags={restoreHashtahsHandler}
      />
      <NotesList
        notes={Object.values(notes)}
        onDeleteNote={deleteNoteHandler}
        onSaveEditedNote={saveEditedNoteHandler}
      />
    </div>
  );
};
export default App;
