import { useState } from 'react';

export default (initialValue) => {
  const [notes, setNotes] = useState(initialValue);

  return {
    notes,
    addNote: (noteText) => {
      setNotes([...notes, noteText]);
    },
    deleteNotes: (noteIndex) => {
      const newNotes = notes
        .filter((_, index) => index !== noteIndex);

      setNotes(newNotes);
    },
  };
};
