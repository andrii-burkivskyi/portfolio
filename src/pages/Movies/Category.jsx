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

const categoryNormalize = (str) => {
  const words = str.split(/_/g);
  const sentence = words.join(' ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

const mapStateToProps = (state, props) => ({
  movies: getSearchMovies(state, props.params.category),
  isPageFetching: getIsMoviesFetchingByCategories(state, [props.params.category]),
  page: getMoviesPageByCategory(state, props.params.category),
  pagesQty: getMoviesPagesQtyByCategory(state, props.params.category)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchMoreMovies: (page) => dispatch(moviesActions.fetchMovies({
    key: props.params.category,
    page
  }))
});

const mergeProps = (state, actions, props) => ({
  ...state,
  ...props,
  loadMore: () => actions.fetchMoreMovies(state.page + 1)
});

const MoviesCategory = ({ movies, page, pagesQty, isPageFetching, loadMore, params }) => (
  <DocumentTitle title={`Movies | ${categoryNormalize(params.category)}`}>
    <ContentWrapper>
      <Header title={`${categoryNormalize(params.category)} movies`} />

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

MoviesCategory.propTypes = {
  movies: PropTypes.array,
  page: PropTypes.number,
  pagesQty: PropTypes.number,
  isPageFetching: PropTypes.bool,
  loadMore: PropTypes.func,
  params: PropTypes.object
};

const onEnter = (nextState, replace, callback) => {
  scrollTo();
  store.dispatch(moviesActions.fetchMoviesGenres());
  store.dispatch(moviesActions.fetchMoviesClear({ key: nextState.params.category }));
  store.dispatch(moviesActions.fetchMovies({ key: nextState.params.category }));
  callback();
};


export const onChange = (prevState, nextState, replace, callback) => {
  store.dispatch(moviesActions.fetchMoviesClear({ key: nextState.params.category }));
  store.dispatch(moviesActions.fetchMovies({ key: nextState.params.category }));
  callback();
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps, mergeProps)(MoviesCategory),
  onEnter,
  onChange
};
