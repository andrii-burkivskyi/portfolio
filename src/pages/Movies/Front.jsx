import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';
import { compose, pure } from 'utils/hoc';

import { scrollTo } from 'utils/dom';


import DocumentTitle from 'react-document-title';
import { ContentWrapper } from 'components/Movies/Wrappers';
import { MainSlider, ContentSlider } from 'components/Movies/Front';

import {
  getMoviesForMainSlider,
  getMoviesByCategory,
  getIsMoviesFetchingByCategories
} from 'core/movies/selectors';

import moviesActions from 'core/movies/actions';

const getTopRatedMovies = getMoviesByCategory();
const getNowPlayingMovies = getMoviesByCategory();
const getPopularMovies = getMoviesByCategory();

const mapStateToProps = (state) => ({
  isPageFetching: getIsMoviesFetchingByCategories(state, ['upcoming', 'top_rated', 'now_playing', 'popular']),
  mainSlider: getMoviesForMainSlider()(state, 'upcoming'),
  topRated: getTopRatedMovies(state, 'top_rated'),
  nowPlaying: getNowPlayingMovies(state, 'now_playing'),
  popular: getPopularMovies(state, 'popular')
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesGenres: () => dispatch(moviesActions.fetchMoviesGenres()),
  fetchMovies: (key) => dispatch(moviesActions.fetchMovies({ key }))
});

const MoviesFront = ({ isPageFetching, mainSlider, topRated, nowPlaying, popular }) => (
  <DocumentTitle title="Movies | Front page">
    <ContentWrapper isLoading={isPageFetching}>
      <MainSlider movies={mainSlider} />

      <ContentSlider
        title="Popular movies"
        movies={popular}
        path="/movies/category/popular"
      />

      <ContentSlider
        title="Now playing movies"
        movies={nowPlaying}
        path="/movies/category/now_playing"
      />

      <ContentSlider
        title="Top rated movies"
        movies={topRated}
        path="/movies/category/top_rated"
      />
    </ContentWrapper>
  </DocumentTitle>
);

MoviesFront.propTypes = {
  mainSlider: PropTypes.array,
  topRated: PropTypes.array,
  nowPlaying: PropTypes.array,
  popular: PropTypes.array
};

const onEnter = (nextState, replace, callback) => {
  scrollTo();
  store.dispatch(moviesActions.fetchMoviesGenres());
  store.dispatch(moviesActions.fetchMovies({ key: 'upcoming' }));
  store.dispatch(moviesActions.fetchMovies({ key: 'top_rated' }));
  store.dispatch(moviesActions.fetchMovies({ key: 'now_playing' }));
  store.dispatch(moviesActions.fetchMovies({ key: 'popular' }));
  callback();
};

export default {
  component: compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure()
  )(MoviesFront),
  onEnter
};

