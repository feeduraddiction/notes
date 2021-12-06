import React from 'react';
import '../Styles/HashTagsList.scss';

let isPushed = false;
// eslint-disable-next-line arrow-body-style
const HashTagsList = ({
  notes,
  onRestoreHashtags,
  onHashtagFilter,
}) => {
  const selectHashTag = (event) => {
    if (!isPushed) {
      onHashtagFilter(event.target.textContent);
      event.target.classList.add('active-button');
      isPushed = true;
    } else if (isPushed) {
      onRestoreHashtags();
      event.target.classList.remove('active-button');
      isPushed = false;
    }
  };

  return (
    <div>
      {notes.map((element) => (
        <button
          className={isPushed ? 'hashtag-list__button active-button' : 'hashtag-list__button'}
          key={Math.random()}
          type="button"
          onClick={selectHashTag}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default HashTagsList;
