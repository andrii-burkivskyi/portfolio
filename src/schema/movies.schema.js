import { Schema, arrayOf } from 'normalizr';

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
