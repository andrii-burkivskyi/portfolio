import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Image from 'components/Image/Image.jsx';
import Icon from 'components/Icon';

import styles from './movies_category__item.scss';

const getPosterSrc = (poster) => poster && `https://image.tmdb.org/t/p/w300${poster}`;

const Item = ({ id, title, poster, popularity, genres }) => (
  <Link to={`/movies/single/${id}`} className={styles.container}>
    <Image
      className={styles.image}
      src={getPosterSrc(poster)}
      alt={title}
      width={204}
      height={306}
      scale={2.5}
    />

    <div className={styles.info_box}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.genres}>{genres}</span>
      <span className={styles.popularity}>
        <span className={styles.popularity_text}>{popularity.toFixed(1)}</span>
        <Icon className={styles.popularity_icon} glyph="#star" />
      </span>
    </div>
  </Link>
);

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  popularity: PropTypes.number,
  genres: PropTypes.string
};

export default Item;
