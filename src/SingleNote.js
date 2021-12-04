import React from 'react';
import { EditText } from 'react-edit-text';
import './SingleNote.scss';

const SingleNote = ({
  note,
  id,
  onSaveChanges,
}) => {
  const saveValueHandler = (value) => {
    onSaveChanges(value.value, id);
  };

  return (
    <div className="single-note" key={id}>
      <EditText
        name="note"
        defaultValue={note}
        onSave={saveValueHandler}
      />
    </div>
  );
};

export default SingleNote;
