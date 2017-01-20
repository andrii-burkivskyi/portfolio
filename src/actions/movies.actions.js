import getFetchActions from 'utils/getFetchActions.js';

export const FETCH_MOVIE = getFetchActions('FETCH_MOVIE');
export const FETCH_PEOPLE_OF_MOVIE = getFetchActions('FETCH_PEOPLE_OF_MOVIE');
export const FETCH_MOVIES = getFetchActions('FETCH_MOVIES');
export const FETCH_SEARCH_MOVIES = getFetchActions('FETCH_SEARCH_MOVIES');
export const FETCH_MOVIES_GENRES = getFetchActions('FETCH_MOVIES_GENRES');

export function fetchMovie(id, title) {
  return { type: FETCH_MOVIE.REQUEST, id, title };
}

export function fetchPeopleOfMovie(id) {
  return { type: FETCH_PEOPLE_OF_MOVIE.REQUEST, id };
}

export function fetchMovies(key, page) {
  return { type: FETCH_MOVIES.REQUEST, key, page };
}

export function clearSearchMovies() {
  return { type: FETCH_SEARCH_MOVIES.CLEAR };
}

export function fetchSearchMovies(query, page) {
  return { type: FETCH_SEARCH_MOVIES.REQUEST, query, page };
}

export function fetchMoviesGenres() {
  return { type: FETCH_MOVIES_GENRES.REQUEST };
}
