import { List, Map } from 'immutable';

export function movieSingleDenormalize(movieEntities, genresEntities, castEntities) {
  let movie = movieEntities || new Map();

  if (!genresEntities) {
    movie = movie.set('genres', new List());
  }

  if (!castEntities) {
    movie = movie.set('cast', new List());
  }

  if (genresEntities && movie.has('genres')) {
    const genres = movie.get('genres')
      .map((genre) => genresEntities.getIn([genre.toString(), 'name']));

    movie = movie.set('genres', genres);
  }

  if (castEntities && movie.has('cast')) {
    const cast = movie.get('cast')
      .map((castItem) => castEntities.get(castItem));

    movie = movie.set('cast', cast);
  }

  return movie;
}

export function movieDenormalize(movieEntities, genresEntities) {
  let movie = movieEntities || new Map();

  if (!genresEntities) {
    movie = movie.set('genre_ids', new List());
  }

  if (genresEntities && movie.has('genre_ids')) {
    const genres = movie.get('genre_ids')
      .map((genre) => genresEntities.getIn([genre.toString(), 'name']));

    movie = movie.set('genre_ids', genres);
  }

  return movie;
}

export function moviesDenormalize(moviesEntities, genresEntities, results) {
  if (!results) { return []; }

  return results.map((result) => {
    const movie = moviesEntities.get(result.toString());

    return movieDenormalize(movie, genresEntities);
  });
}
