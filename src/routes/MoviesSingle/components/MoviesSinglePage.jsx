import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieById } from 'selectors/movies.selector.js';

import MoviesSingleSidebar from 'components/Movies/SingleSidebar/MoviesSingleSidebar.jsx';
import MoviesSingleContent from 'components/Movies/SingleContent/MoviesSingleContent.jsx';
import MoviesMainContainer from 'components/Wrappers/MoviesMainContainer.jsx';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.params;

  return {
    movie: getMovieById(state, id)
  };
}

@connect(mapStateToProps)
export default class MoviesSinglePage extends Component {
  render() {
    const { movie } = this.props;

    return (
      <MoviesMainContainer>
        <MoviesSingleSidebar
          poster={movie.get('poster_path')}
          genres={movie.get('genres')}
          title={movie.get('title')}
          voteAverage={movie.get('vote_average')}
          voteCount={movie.get('vote_count')}
          releaseDate={movie.get('release_date')}
          budget={movie.get('budget')}
          status={movie.get('status')}
          runtime={movie.get('runtime')}
        />

        <MoviesSingleContent
          title={movie.get('title')}
          overview={movie.get('overview')}
          cast={movie.get('cast')}
        />
      </MoviesMainContainer>
    );
  }
}
