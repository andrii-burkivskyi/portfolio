import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';

import { scrollTo } from 'utils/dom';

import DocumentTitle from 'react-document-title';
import { ContentWrapper } from 'components/Movies/Wrappers';
import { Header, Body } from 'components/Movies/Category';
import Button from 'components/Button';

import {
  getMoviesByCategory,
  getIsMoviesFetchingByCategories,
  getMoviesPageByCategory,
  getMoviesPagesQtyByCategory
} from 'core/movies/selectors';
import moviesActions from 'core/movies/actions';


const getSearchMovies = getMoviesByCategory();

const mapStateToProps = (state) => ({
  movies: getSearchMovies(state, 'search'),
  isPageFetching: getIsMoviesFetchingByCategories(state, ['search']),
  page: getMoviesPageByCategory(state, 'search'),
  pagesQty: getMoviesPagesQtyByCategory(state, 'search')
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoreMovies: (page) => dispatch(moviesActions.fetchSearchMovies({ page }))
});

const mergeProps = (state, actions) => ({
  ...state,
  loadMore: () => actions.fetchMoreMovies(state.page + 1)
});

const MoviesSearch = ({ movies, page, pagesQty, isPageFetching, loadMore }) => (
  <DocumentTitle title="Movies | Search page">
    <ContentWrapper>
      <Header title="Searched movies" />

      <Body movies={movies} />

      {
        page < pagesQty &&
          <Button
            text="Load more"
            theme="movies"
            isDisable={isPageFetching}
            onClick={loadMore}
          />
      }

    </ContentWrapper>
  </DocumentTitle>
);

MoviesSearch.propTypes = {
  movies: PropTypes.array,
  page: PropTypes.number,
  pagesQty: PropTypes.number,
  isPageFetching: PropTypes.bool,
  loadMore: PropTypes.func
};

const onEnter = (nextState, replace, callback) => {
  scrollTo();
  store.dispatch(moviesActions.fetchMoviesGenres());
  store.dispatch(moviesActions.fetchMoviesClear({ key: 'search' }));
  store.dispatch(moviesActions.fetchSearchMovies());
  callback();
};


export const onChange = (prevState, nextState, replace, callback) => {
  store.dispatch(moviesActions.fetchMoviesClear({ key: 'search' }));
  store.dispatch(moviesActions.fetchSearchMovies());
  callback();
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps, mergeProps)(MoviesSearch),
  onEnter,
  onChange
};
