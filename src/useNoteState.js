import { useState } from 'react';

const findHashtags = (noteToFind) => {
  const regExp = /\B#\w\w+\b/g;
  const result = noteToFind.match(regExp);
  if (result) {
    return result;
  }
  return [''];
};

export default (initialValue) => {
  const [notes, setNotes] = useState(initialValue);
  return {
    notes,
    addNote: (newNote) => {
      setNotes([...notes, newNote]);
    },
    deleteNotes: (noteIndex) => {
      const newNotes = notes
        .filter((_, index) => index !== noteIndex);
      setNotes(newNotes);
    },
    saveEditedNote: (newValue, index) => {
      const newNotes = notes;
      newNotes[index] = {
        ...newNotes[index],
        note: newValue,
        hashtag: findHashtags(newValue),
      };
      setNotes(newNotes);
    },
  };
};
