import moviesAPI from 'api/movies.api.js';
import { createFetchAction } from 'utils/actionCreator';
import { normalize } from 'normalizr';

import { getPickedQuery } from 'core/routing/selectors';

import { MOVIE, MOVIES, GENRES } from './schema.js';

export default {
  ...createFetchAction({
    type: 'FETCH_MOVIES_GENRES',
    callAPI: () => moviesAPI.fetchMoviesGenres(),
    normalizing: (response) => normalize(response.genres, GENRES)
  }),
  ...createFetchAction({
    type: 'FETCH_MOVIES',
    callAPI: (action) => moviesAPI.fetchMovies(action.key, action.page),
    normalizing: (response) => normalize(response.results, MOVIES),
    pagination: (response) => ({
      page: response.page,
      total_pages: response.total_pages
    }),
    getKeyFromAction: (action) => action.key
  }),
  ...createFetchAction({
    name: 'fetchSearchMovies',
    type: 'FETCH_MOVIES',
    callAPI: (action, state) => moviesAPI.fetchSearchMovies(getPickedQuery(state, ['query']), action.page),
    normalizing: (response) => normalize(response.results, MOVIES),
    pagination: (response) => ({
      page: response.page,
      total_pages: response.total_pages
    }),
    getKeyFromAction: () => 'search'
  }),
  ...createFetchAction({
    type: 'FETCH_MOVIE',
    callAPI: (action) => moviesAPI.fetchMovie(action.id),
    normalizing: (response) => normalize(response, MOVIE)
  }),
  ...createFetchAction({
    type: 'FETCH_PEOPLE_OF_MOVIE',
    callAPI: (action) => moviesAPI.fetchPeopleOfMovie(action.id),
    normalizing: (response) => normalize(response, MOVIE)
  })
};
