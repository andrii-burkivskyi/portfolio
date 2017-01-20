import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryNormalize } from 'utils/string.js';

import { fetchMovies } from 'actions/movies.actions.js';

import {
  getMoviesByCategory
} from 'selectors/movies.selector.js';

import MoviesCategoryHeader from 'components/Movies/CategoryHeader/MoviesCategoryHeader.jsx';
import MoviesCategoryBody from 'components/Movies/CategoryBody/MoviesCategoryBody.jsx';
import MoviesCategoryLoadMoreButton from 'components/Movies/CategoryBody/MoviesCategoryLoadMoreButton.jsx';

function mapStateToProps(state, ownProps) {
  const { category } = ownProps.params;

  return {
    movies: getMoviesByCategory(state, category),
    isPageFetching: state.getIn(['movies', category, 'isFetching']),
    page: state.getIn(['movies', category, 'page']),
    pagesQty: state.getIn(['movies', category, 'total_pages'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMore: (category, page) => dispatch(fetchMovies(category, page))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MoviesCategoryPage extends Component {
  render() {
    const { category } = this.props.params;
    const { movies, page, pagesQty, isPageFetching, loadMore } = this.props;

    return (
      <div>
        <MoviesCategoryHeader
          title={categoryNormalize(category)}
        />

        <MoviesCategoryBody
          movies={movies}
        />

        <MoviesCategoryLoadMoreButton
          category={category}
          page={page}
          pagesQty={pagesQty}
          isPageFetching={isPageFetching}
          loadMore={loadMore}
        />
      </div>
    );
  }
}
