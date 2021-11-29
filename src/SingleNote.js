import React from 'react';
import { EditText } from 'react-edit-text';
import './SingleNote.scss';

const SingleNote = ({
  note,
  id,
  index,
  onEditNote,
}) => {
  const saveValueHandler = (value) => {
    console.log(value);
    onEditNote(value.value, index);
    console.log(note);
  };

  return (
    <div className="single-note">
      <EditText
        name="note"
        defaultValue={note}
        key={id}
        onSave={saveValueHandler}
      />
    </div>
  );
};

export default SingleNote;
