import React from 'react';

// eslint-disable-next-line arrow-body-style
const HashTagsList = ({
  notes,
  onRestoreHashtags,
  onHashtagFilter,
}) => {
  const arrayOfNotes = Array.from(new Set(notes.map((note) => Object.values(note)[1]).flat(1)));
  const selectHashTag = (event) => {
    onHashtagFilter(event.target.textContent);
  };

  return (
    <div>
      <h2>List of hashtags</h2>
      <button type="button" onClick={onRestoreHashtags}>Restore hashtags</button>
      {arrayOfNotes.map((element) => <button key={Math.random()} type="button" onClick={selectHashTag}>{element}</button>)}
    </div>
  );
};

export default HashTagsList;
