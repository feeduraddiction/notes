import React from 'react';
import './SingleNote.scss';

const SingleNote = (props) => {
  console.log(props);
  const { note, id } = props;
  return (
    <div className="single-note">
      <div className="single-note__content" key={id}>{note}</div>
    </div>
  );
};

export default SingleNote;
