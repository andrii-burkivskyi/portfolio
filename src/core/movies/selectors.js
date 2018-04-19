import get from 'lodash.get';
import { createSelector } from 'reselect';
import { DEFAULT_ARRAY } from 'utils/constants';

import { movieSingleDenormalize, moviesDenormalize } from './schema';

const movieEntities = (state, id) => get(state, ['entities', 'movies', String(id)]);
const moviesListEntities = (state) => get(state, ['entities', 'movies']);
const genresListEntities = (state) => get(state, ['entities', 'genres']);
const castListEntities = (state) => get(state, ['entities', 'cast']);

const moviesResultsByCategory = (state, category) => get(state, ['movies', category, 'data']);
const moviesIsFetchingByCategory = (state, category) => get(state, ['movies', category, 'isFetching']);

export const getMoviesPageByCategory = (state, category) => get(state, ['movies', category, 'page']);
export const getMoviesPagesQtyByCategory = (state, category) => get(state, ['movies', category, 'total_pages']);

export const getIsMoviesFetchingByCategories = (state, categories) =>
  categories.some((category) => moviesIsFetchingByCategory(state, category));

export const getMoviesForMainSlider = () => createSelector(
  moviesListEntities,
  moviesResultsByCategory,
  (entities, results) => results // eslint-disable-line
    ? results.slice(0, 5).map((result) =>
      entities[String(result)])
    : DEFAULT_ARRAY
);

export const getMovieById = createSelector(
  [movieEntities, genresListEntities, castListEntities],
  movieSingleDenormalize
);

export const getMoviesByCategory = () => createSelector(
  [moviesListEntities, genresListEntities, moviesResultsByCategory],
  moviesDenormalize
);
