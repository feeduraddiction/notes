export default async (setHandler) => {
  try {
    const response = await fetch('https://salty-fjord-44367.herokuapp.com/notes');
    const json = await response.json();
    setHandler(json);
  } catch (error) {
    console.log('error', error);
  }
};
