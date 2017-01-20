import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getMoviesForMainSlider,
  getMoviesByCategory
} from 'selectors/movies.selector.js';

import MoviesMainSlider from 'components/Movies/MainSlider/MoviesMainSlider.jsx';
import MoviesContentSlider from 'components/Movies/ContentSlider/MoviesContentSlider.jsx';

function mapStateToProps(state) {
  return {
    moviesForMainSlider: getMoviesForMainSlider(state, 'upcoming'),
    topRatedMovies: getMoviesByCategory(state, 'top_rated'),
    nowPlayingMovies: getMoviesByCategory(state, 'now_playing'),
    popularMovies: getMoviesByCategory(state, 'popular')
  };
}

@connect(mapStateToProps)
export default class MoviesFrontPage extends Component {
  render() {
    const {
      moviesForMainSlider,
      topRatedMovies,
      nowPlayingMovies,
      popularMovies
    } = this.props;

    return (
      <div>
        <MoviesMainSlider
          movies={moviesForMainSlider}
        />

        <MoviesContentSlider
          title={'Popular movies'}
          movies={popularMovies}
          path={'/movies/category/popular'}
        />

        <MoviesContentSlider
          title={'Now playing movies'}
          movies={nowPlayingMovies}
          path={'/movies/category/now_playing'}
        />

        <MoviesContentSlider
          title={'Top rated movies'}
          movies={topRatedMovies}
          path={'/movies/category/top_rated'}
        />
      </div>
    );
  }
}
