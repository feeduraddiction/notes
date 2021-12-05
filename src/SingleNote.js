/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './SingleNote.scss';
import Mark from 'mark.js';

const SingleNote = ({
  note,
  id,
  onSaveChanges,
  index,
}) => {
  // const instanceMark = new Mark(document.querySelectorAll('div.content-to-edit')[index]);
  const regExp = /\B#\w\w+\b/g;

  const saveValueHandler = (event) => {
    const instanceMark = new Mark(document.querySelectorAll('div.single-note__text')[index]);
    instanceMark.unmark(regExp);
    onSaveChanges(event.target.textContent, id);
  };
  const focusHandler = () => {
    const instanceMark = new Mark(document.querySelectorAll('div.single-note__text')[index]);
    instanceMark.markRegExp(regExp);
  };

  return (
    <div
      className="single-note"
      key={id}
    >
      <div
        contentEditable="true"
        className="single-note__text"
        onFocus={focusHandler}
        onBlur={saveValueHandler}
        suppressContentEditableWarning="true"
      >
        {note}
      </div>
    </div>
  );
};

export default SingleNote;
