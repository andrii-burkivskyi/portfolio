import fetch from 'isomorphic-fetch';
import { serialize } from 'utils/url';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

function fetchMovie(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US'
  };

  return fetch(`${API_URL}/movie/${id}${serialize(params)}`)
    .then((response) => response.json());
}

function fetchPeopleOfMovie(id) {
  const params = {
    api_key: API_KEY,
    language: 'en-US'
  };

  return fetch(`${API_URL}/movie/${id}/credits${serialize(params)}`)
    .then((response) => response.json());
}

function fetchMovies(key, page = 1) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    page
  };

  return fetch(`${API_URL}/movie/${key}${serialize(params)}`)
    .then((response) => response.json());
}

function fetchSearchMovies(query, page = 1) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    ...query,
    page
  };

  return fetch(`${API_URL}/search/movie${serialize(params)}`)
    .then((response) => response.json());
}

function fetchMoviesGenres() {
  const params = {
    api_key: API_KEY,
    language: 'en-US'
  };

  return fetch(`${API_URL}/genre/movie/list${serialize(params)}`)
    .then((response) => response.json());
}

export default {
  fetchMovie,
  fetchPeopleOfMovie,
  fetchMovies,
  fetchSearchMovies,
  fetchMoviesGenres
};
