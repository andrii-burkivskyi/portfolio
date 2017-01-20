import { normalize } from 'normalizr';
import createSagaWithFetch from 'sagas/createSagaWithFetch.js';

import { FETCH_CV } from 'actions/cv.actions.js';
import { FETCH_HEADER, FETCH_PROJECTS } from 'actions/projects.actions.js';
import {
  FETCH_MOVIE,
  FETCH_PEOPLE_OF_MOVIE,
  FETCH_SEARCH_MOVIES,
  FETCH_MOVIES,
  FETCH_MOVIES_GENRES
} from 'actions/movies.actions.js';

import cvAPI from 'api/cv.api.js';
import projectListAPI from 'api/projects.api.js';
import moviesAPI from 'api/movies.api.js';

import { CV_BLOCKS_LIST } from 'schema/cv.schema.js';
import { PROJECT_LIST } from 'schema/projects.schema.js';
import { MOVIE, MOVIES, GENRES } from 'schema/movies.schema.js';

export default function* watchFetchActions() {
  const fetchHeader = createSagaWithFetch({
    types: FETCH_HEADER.ALL,
    callAPI: () => projectListAPI.fetchHeader(),
    normalizing: (response) => response,
    getKeyFromAction: (action) => action.key
  });

  const fetchProjects = createSagaWithFetch({
    types: FETCH_PROJECTS.ALL,
    callAPI: () => projectListAPI.fetchProjects(),
    normalizing: (response) => normalize(response, PROJECT_LIST)
  });

  const fetchCV = createSagaWithFetch({
    types: FETCH_CV.ALL,
    callAPI: (action) => cvAPI.fetchData(action.key),
    normalizing: (response) => normalize(response.blocks, CV_BLOCKS_LIST),
    getKeyFromAction: (action) => action.key
  });

  const fetchMovie = createSagaWithFetch({
    types: FETCH_MOVIE.ALL,
    getTitleVars: (response) => [response.title],
    callAPI: (action) => moviesAPI.fetchMovie(action.id),
    normalizing: (response) => normalize(response, MOVIE)
  });

  const fetchPeopleOfMovie = createSagaWithFetch({
    types: FETCH_PEOPLE_OF_MOVIE.ALL,
    callAPI: (action) => moviesAPI.fetchPeopleOfMovie(action.id),
    normalizing: (response) => normalize(response, MOVIE)
  });

  const fetchMovies = createSagaWithFetch({
    types: FETCH_MOVIES.ALL,
    callAPI: (action) => moviesAPI.fetchMovies(action.key, action.page),
    normalizing: (response) => normalize(response.results, MOVIES),
    pagination: (response) => ({
      page: response.page,
      total_pages: response.total_pages
    }),
    getKeyFromAction: (action) => action.key
  });

  const fetchSearchMovies = createSagaWithFetch({
    types: FETCH_SEARCH_MOVIES.ALL,
    callAPI: (action) => moviesAPI.fetchSearchMovies(action.query, action.page),
    normalizing: (response) => normalize(response.results, MOVIES),
    pagination: (response) => ({
      page: response.page,
      total_pages: response.total_pages
    }),
    getKeyFromAction: () => 'search'
  });

  const fetchMoviesGenres = createSagaWithFetch({
    types: FETCH_MOVIES_GENRES.ALL,
    callAPI: () => moviesAPI.fetchMoviesGenres(),
    normalizing: (response) => normalize(response.genres, GENRES)
  });

  yield [
    fetchHeader,
    fetchProjects,
    fetchCV,
    fetchMovie,
    fetchSearchMovies,
    fetchPeopleOfMovie,
    fetchMovies,
    fetchMoviesGenres
  ];
}
