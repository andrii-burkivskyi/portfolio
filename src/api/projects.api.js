import fetch from 'isomorphic-fetch';

const API_URL = 'https://raw.githubusercontent.com/andrii-burkivskyi/data/master';

function fetchHeader() {
  return fetch(`${API_URL}/project-list/project-header.json`)
    .then((response) => response.json());
}

function fetchProjects() {
  return fetch(`${API_URL}/project-list/project-list.json`)
    .then((response) => response.json());
}

export default {
  fetchHeader,
  fetchProjects
};
