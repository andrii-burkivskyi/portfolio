import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Image from 'components/Image/Image.jsx';

import InfoItem from './InfoItem';

import styles from './movies_single__sidebar.scss';

const getPosterUrl = (poster) => poster ? `https://image.tmdb.org/t/p/w300${poster}` : undefined;

const getGenres = (genres) => genres ? genres.join(', ') : undefined;

const getRating = (voteAverage, voteCount) =>
  (voteAverage && voteCount) ? `${voteAverage} from ${voteCount} users` : undefined;

const getBudget = (budget) => budget ? `${budget} $` : undefined;

const getReleaseDate = (releaseDate) => {
  const date = moment(releaseDate);
  return date.isValid() ? date.format('D MMM YYYY') : undefined;
};

const getRuntime = (runtime) => runtime ? `${runtime} minutes` : undefined;

const Sidebar = (props) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={getPosterUrl(props.poster)}
      alt={props.title}
      width={204}
      height={306}
      scale={2.5}
    />

    <InfoItem label="Genres:" text={getGenres(props.genres)} />

    <InfoItem label="Rating:" text={getRating(props.voteAverage, props.voteCount)} />

    <InfoItem label="Release date:" text={getReleaseDate(props.releaseDate)} />

    <InfoItem label="Budget:" text={getBudget(props.budget)} />

    <InfoItem label="Status:" text={props.status} />

    <InfoItem label="Runtime:" text={getRuntime(props.runtime)} />
  </div>
);

Sidebar.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.array,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
  releaseDate: PropTypes.string,
  budget: PropTypes.number,
  status: PropTypes.string,
  runtime: PropTypes.number
};

export default Sidebar;
