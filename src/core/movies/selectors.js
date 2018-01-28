import _ from 'lodash';
import { createSelector } from 'reselect';
import { DEFAULT_ARRAY } from 'utils/constants';

import { movieSingleDenormalize, moviesDenormalize } from './schema';

const movieEntities = (state, id) => _.get(state, ['entities', 'movies', String(id)]);
const moviesListEntities = (state) => _.get(state, ['entities', 'movies']);
const genresListEntities = (state) => _.get(state, ['entities', 'genres']);
const castListEntities = (state) => _.get(state, ['entities', 'cast']);

const moviesResultsByCategory = (state, category) => _.get(state, ['movies', category, 'data']);
const moviesIsFetchingByCategory = (state, category) => _.get(state, ['movies', category, 'isFetching']);

export const getMoviesPageByCategory = (state, category) => _.get(state, ['movies', category, 'page']);
export const getMoviesPagesQtyByCategory = (state, category) => _.get(state, ['movies', category, 'total_pages']);

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
