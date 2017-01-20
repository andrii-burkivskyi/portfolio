import { createSelector } from 'reselect';

import { movieSingleDenormalize, moviesDenormalize } from 'schema/movies.denormalize.js';

const movieEntities = (state, id) => state.getIn(['entities', 'movies', id.toString()]);
const moviesListEntities = (state) => state.getIn(['entities', 'movies']);
const genresListEntities = (state) => state.getIn(['entities', 'genres']);
const castListEntities = (state) => state.getIn(['entities', 'cast']);

const moviesResultsByCategory = (state, category) => state.getIn(['movies', category, 'data']);
const moviesResultsBySearch = (state) => state.getIn(['searchMovies', 'data']);

export const getMoviesForMainSlider = createSelector(
  moviesListEntities,
  moviesResultsByCategory,
  (entities, results) => results.slice(0, 5).map((result) =>
    entities.get(result.toString()))
);

export const getMovieById = createSelector(
  movieEntities,
  genresListEntities,
  castListEntities,
  movieSingleDenormalize
);

export const getMoviesByCategory = createSelector(
  moviesListEntities,
  genresListEntities,
  moviesResultsByCategory,
  moviesDenormalize
);

export const getMoviesBySearch = createSelector(
  moviesListEntities,
  genresListEntities,
  moviesResultsBySearch,
  moviesDenormalize
);

