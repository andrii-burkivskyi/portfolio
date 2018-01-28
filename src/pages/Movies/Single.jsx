import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';

import { scrollTo } from 'utils/dom';

import { getMovieById } from 'core/movies/selectors';

import moviesActions from 'core/movies/actions';

import DocumentTitle from 'react-document-title';
import { ContentWrapper } from 'components/Movies/Wrappers';
import { Content, Sidebar } from 'components/Movies/Single';

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.params.id)
});

const MoviesSingle = ({ movie }) => (
  <DocumentTitle title={`Movies | ${movie.title}`}>
    <ContentWrapper theme="single">
      <Sidebar
        poster={movie.poster_path}
        genres={movie.genres}
        title={movie.title}
        voteAverage={movie.vote_average}
        voteCount={movie.vote_count}
        releaseDate={movie.release_date}
        budget={movie.budget}
        status={movie.status}
        runtime={movie.runtime}
      />

      <Content
        title={movie.title}
        overview={movie.overview}
        cast={movie.cast}
      />
    </ContentWrapper>
  </DocumentTitle>
);

MoviesSingle.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    genres: PropTypes.array,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    budget: PropTypes.number,
    status: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    cast: PropTypes.array
  })
};

const onEnter = (location, replace, callback) => {
  scrollTo();
  store.dispatch(moviesActions.fetchMovie({ id: location.params.id }));
  store.dispatch(moviesActions.fetchPeopleOfMovie({ id: location.params.id }));
  callback();
};

export default {
  component: connect(mapStateToProps)(MoviesSingle),
  onEnter
};
