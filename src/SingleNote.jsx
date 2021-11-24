import React from 'react';
import './SingleNote.css';

const SingleNote = (props) => {
  console.log(props);
  const deleteNoteHandler = (e) => {
    const id = e.target.getAttribute('id');
    const { onGetIdToDel } = props;
    onGetIdToDel(id);
    // console.log(id);
  };
  const { note, id } = props;
  return (
    <div className="single-note">
      <div className="single-note__content">{note}</div>
      <button
        type="button"
        className="single-note__control"
        key={id}
        id={id}
        onClick={deleteNoteHandler}
      >
        X
      </button>
    </div>
  );
};

export default SingleNote;
