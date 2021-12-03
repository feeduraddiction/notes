import React, { useEffect, useState } from 'react';
import NewNote from './NewNote';
import './App.css';
import NotesList from './NotesList';
import useNoteState from './useNoteState';
import HashTagsList from './HashTagsList';

const App = () => {
  const {
    notes,
    addNote,
    // deleteNotes,
    saveEditedNote,
    filterNotes,
    restoreHashtags,
  } = useNoteState([]);

  const [test, setTest] = useState('');
  useEffect(() => {
    const url = 'http://localhost:3001/users';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTest(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  const sendToServerHandle = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'santa',
        password: 'pass',
        profession: 'king',
        id: '1234',
      }),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  console.log(notes);
  console.log(Object.values(test));
  return (
    <div className="App">
      <NewNote
        onAddNote={addNote}
      />
      <HashTagsList
        notes={Object.values(test)}
        onFilterNotes={filterNotes}
        onRestoreHashtags={restoreHashtags}
      />
      <NotesList
        notes={Object.values(test)}
    //  onDeleteNotes={testDeleteNotes}
        onSaveEditedNote={saveEditedNote}
      />
      <div>
        {Object.values(test).map((element) => <div>{element.note}</div>)}
        <button type="button" onClick={sendToServerHandle}>Send to server!!1</button>
      </div>
    </div>
  );
};
export default App;
