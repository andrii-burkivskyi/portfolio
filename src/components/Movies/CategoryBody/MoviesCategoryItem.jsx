import React, { Component } from 'react';
import { Link } from 'react-router';

import Image from 'components/Image/Image.jsx';
import Icon from 'components/Icon/Icon.jsx';

import styles from './MoviesCategoryItem.scss';

export default class MoviesCategoryItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }

  render() {
    const { id, title, poster, popularity, genres } = this.props;
    const posterSrc = poster && `https://image.tmdb.org/t/p/w300${poster}`;

    return (
      <Link to={`/movies/single/${id}`} className={styles.container}>
        <Image
          className={styles.image}
          src={posterSrc}
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
