import createReducerWithKeys from 'reducers/createReducerWithKeys.js';
import createReducerWithFetch from 'reducers/createReducerWithFetch.js';

import { FETCH_CV } from 'actions/cv.actions.js';
import { FETCH_HEADER, FETCH_PROJECTS } from 'actions/projects.actions.js';
import { FETCH_MOVIES, FETCH_SEARCH_MOVIES } from 'actions/movies.actions.js';

export const cv = createReducerWithKeys({
  types: FETCH_CV.ALL,
  reducer: createReducerWithFetch({
    types: FETCH_CV.ALL
  })
});

export const smallData = createReducerWithKeys({
  types: FETCH_HEADER.ALL,
  reducer: createReducerWithFetch({
    types: FETCH_HEADER.ALL,
    getDataFromAction: (action) => action.response
  })
});

export const projects = createReducerWithFetch({
  types: FETCH_PROJECTS.ALL
});

export const movies = createReducerWithKeys({
  types: FETCH_MOVIES.ALL,
  reducer: createReducerWithFetch({
    types: FETCH_MOVIES.ALL,
    getPaginationFromAction: (action) => action.pagination
  })
});

export const searchMovies = createReducerWithFetch({
  types: FETCH_SEARCH_MOVIES.ALL,
  getPaginationFromAction: (action) => action.pagination
});
