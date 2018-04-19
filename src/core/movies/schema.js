import get from 'lodash.get';
import { Schema, arrayOf } from 'normalizr';

import { DEFAULT_OBJECT, DEFAULT_ARRAY } from 'utils/constants';

const movie = new Schema('movies');
const genre = new Schema('genres');
const colection = new Schema('colections');
const company = new Schema('companies');
const cast = new Schema('cast', { idAttribute: 'credit_id' });
const crew = new Schema('crew', { idAttribute: 'credit_id' });

movie.define({
  genres: arrayOf(genre),
  belong_to_colection: arrayOf(colection),
  production_companies: arrayOf(company),
  cast: arrayOf(cast),
  crew: arrayOf(crew)
});

export const MOVIE = movie;
export const MOVIES = arrayOf(movie);
export const GENRES = arrayOf(genre);

export function movieSingleDenormalize(movieEntities, genresEntities, castEntities) {
  let movieValue = { ...movieEntities } || DEFAULT_OBJECT;

  if (!genresEntities) {
    movieValue = { ...movieValue, genres: DEFAULT_ARRAY };
  }

  if (!castEntities) {
    movieValue = { ...movieValue, cast: DEFAULT_ARRAY };
  }

  if (genresEntities && movieValue.genres) {
    const genres = movieValue.genres
      .map((genreValue) => genresEntities[String(genreValue)].name);

    movieValue = { ...movieValue, genres };
  }

  if (castEntities && movieValue.cast) {
    const castValue = movieValue.cast
      .map((castItem) => castEntities[castItem]);

    movieValue = { ...movieValue, cast: castValue };
  }

  return movieValue;
}

export function movieDenormalize(movieEntities, genresEntities) {
  let movieValue = movieEntities || DEFAULT_OBJECT;

  if (!genresEntities) {
    movieValue = { ...movieValue, genres: '' };
  }

  if (genresEntities && movieValue.genre_ids) {
    const genres = movieValue.genre_ids
      .map((genreValue) => get(genresEntities, [String(genreValue), 'name']))
      .join(' | ');

    movieValue = { ...movieValue, genres };
  }

  return movieValue;
}

export function moviesDenormalize(moviesEntities, genresEntities, results) {
  if (!results) { return DEFAULT_ARRAY; }

  return results.map((result) => {
    const movieValue = moviesEntities[String(result)];

    return movieDenormalize(movieValue, genresEntities);
  });
}
