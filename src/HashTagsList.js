import React from 'react';
import './HashTagsList.scss';

// eslint-disable-next-line arrow-body-style
const HashTagsList = ({
  notes,
  onRestoreHashtags,
  onHashtagFilter,
}) => {
  const arrayOfNotes = Array.from(new Set(notes.map((note) => Object.values(note)[1]).flat(1))).filter((element) => element !== '');
  const selectHashTag = (event) => {
    console.log(event.target);
    event.target.classList.toggle('active-button');
    let isPushed = false;
    if (!isPushed) {
      onHashtagFilter(event.target.textContent);
      isPushed = true;
      console.log(isPushed);
    } else if (isPushed) {
      onRestoreHashtags();
      isPushed = false;
      console.log(isPushed);
    }
  };

  return (
    <div>
      <button type="button" onClick={onRestoreHashtags}>Restore hashtags</button>
      {arrayOfNotes.map((element) => <button className="hashtag-list__button" key={Math.random()} type="button" onClick={selectHashTag}>{element}</button>)}
    </div>
  );
};

export default HashTagsList;
