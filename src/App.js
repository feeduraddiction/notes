import React, { useEffect, useState } from 'react';
import NewNote from './NotesInput/NewNote';
import './Styles/App.scss';
import NotesList from './NotesDisplay/NotesList';
import HashTagsList from './NotesDisplay/HashTagsList';
import fetchData from './Functions/FetchData';

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
    fetch('https://salty-fjord-44367.herokuapp.com/notes', {
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
    fetch(`https://salty-fjord-44367.herokuapp.com/notes/${noteToDelete.id}`, {
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
    fetch(`https://salty-fjord-44367.herokuapp.com/notes/${id}`, {
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

  const arrayOfHashtags = Array.from(new Set(Object.values(notes).map((note) => Object.values(note)[1]).flat(1))).filter((element) => element !== '');

  return (
    <div className="App">
      <NewNote
        onAddNote={addNote}
      />
      <HashTagsList
        notes={arrayOfHashtags}
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
