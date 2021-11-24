import React, { useState } from 'react';
import InputField from './InputField';
import './App.css';
import NotesList from './NotesList';

const init = [
  {
    note: 'hello',
    id: 0,
  },
];
const App = () => {
  const [note, setNote] = useState(init);
  const getNoteDataHandler = (enteredNoteData) => {
    setNote((prevNote) => [enteredNoteData, ...prevNote]);
  };
  return (
    <div className="App">
      <InputField onGetNoteData={getNoteDataHandler} />
      <NotesList noteText={note} />
    </div>
  );
};
export default App;
