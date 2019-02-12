// @flow

export const fetchAnswer = async (value) => {
  return await fetch('/api/v1/get_nums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error: ', error);
    });
};
