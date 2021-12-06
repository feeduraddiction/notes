export default async (setHandler) => {
  try {
    const response = await fetch('http://localhost:3001/users');
    const json = await response.json();
    setHandler(json);
  } catch (error) {
    console.log('error', error);
  }
};
