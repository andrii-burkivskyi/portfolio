import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSearchMovies } from 'actions/movies.actions.js';

import {
  getMoviesBySearch
} from 'selectors/movies.selector.js';

import MoviesCategoryHeader from 'components/Movies/CategoryHeader/MoviesCategoryHeader.jsx';
import MoviesCategoryBody from 'components/Movies/CategoryBody/MoviesCategoryBody.jsx';
import MoviesCategoryLoadMoreButton from 'components/Movies/CategoryBody/MoviesCategoryLoadMoreButton.jsx';

function mapStateToProps(state) {
  return {
    movies: getMoviesBySearch(state),
    isPageFetching: state.getIn(['searchMovies', 'isFetching']),
    page: state.getIn(['searchMovies', 'page']),
    pagesQty: state.getIn(['searchMovies', 'total_pages'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMore: (category, page) => dispatch(fetchSearchMovies(category, page))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MoviesSearchPage extends Component {
  render() {
    const { query } = this.props.location;
    const { movies, page, pagesQty, isPageFetching, loadMore } = this.props;

    return (
      <div>
        <MoviesCategoryHeader
          title={'Searched movies'}
        />

        <MoviesCategoryBody
          movies={movies}
        />

        <MoviesCategoryLoadMoreButton
          category={query.search}
          page={page}
          pagesQty={pagesQty}
          isPageFetching={isPageFetching}
          loadMore={loadMore}
        />
      </div>
    );
  }
}
