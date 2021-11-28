import React from 'react';

// eslint-disable-next-line arrow-body-style
const HashTagsList = ({ notes }) => {
//   console.log(notes, 'hell');
  return (
    <div>
      <h2>List of hashtags</h2>
      {notes.map((element) => (
        element.hashtag.map((hashtag) => (
          <div>{hashtag}</div>
        ))
      ))}
    </div>
  );
};

export default HashTagsList;
