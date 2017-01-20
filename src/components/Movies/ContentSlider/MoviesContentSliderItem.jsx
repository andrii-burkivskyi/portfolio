import React, { Component } from 'react';
import { Link } from 'react-router';

import Image from 'components/Image/Image.jsx';
import Icon from 'components/Icon/Icon.jsx';

import styles from './MoviesContentSliderItem.scss';

export default class MoviesContentSliderItem extends Component {
  render() {
    const { id, title, poster, popularity, genres } = this.props;

    return (
      <Link to={`/movies/single/${id}`} className={styles.container}>
        <Image
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
          width={204}
          height={306}
          scale={2.5}
        />
        <div className={styles.info_box}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.genres}>{genres.slice(0, 3).join(' | ')}</span>
          <span className={styles.popularity}>
            <span className={styles.popularity_text}>{popularity.toFixed(1)}</span>
            <Icon className={styles.popularity_icon} glyph={'#star'} />
          </span>
        </div>
      </Link>
    );
  }
}
