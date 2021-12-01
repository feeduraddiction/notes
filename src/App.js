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
    deleteNotes,
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
        console.log(response);
        const json = await response.json();
        console.log(json);
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
      headers: {
        Accept: 'testjson',
        'Content-Type': 'testContent',
      },
      body: JSON.stringify({
        name: 'santa',
      }),
    })
      .then((res) => res.json())
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
        notes={notes}
        onFilterNotes={filterNotes}
        onRestoreHashtags={restoreHashtags}
      />
      <NotesList
        notes={notes}
        onDeleteNotes={deleteNotes}
        onSaveEditedNote={saveEditedNote}
      />
      <div>
        {Object.values(test).map((element) => <div>{element.name}</div>)}
        <button type="button" onClick={sendToServerHandle}>Send to server!!1</button>
      </div>
    </div>
  );
};
export default App;
