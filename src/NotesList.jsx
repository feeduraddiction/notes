import React, { useState } from 'react';
import SingleNote from './SingleNote';

const NotesList = (props) => {
  const [noteToDel, setNoteToDel] = useState('');
  const getIdToDelHandler = (note) => {
    setNoteToDel(note);
    // console.log(noteToDel)
  };
  const { noteText } = props;
  const filteredNotes = noteText.filter((element) => element.key !== noteToDel);
  return (
    <div>
      {filteredNotes.map((element, index) => (
        <SingleNote
          note={element.note}
          key={index.id}
          onGetIdToDel={getIdToDelHandler}
        />
      ))}
    </div>
  );
};

export default NotesList;
