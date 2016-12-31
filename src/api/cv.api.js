import fetch from 'isomorphic-fetch';

const API_URL = 'https://raw.githubusercontent.com/andrii-burkivskyi/data/master';

function fetchData(fileName) {
  return fetch(`${API_URL}/cv/${fileName}`)
    .then((response) => response.json());
}

export default {
  fetchData
};
