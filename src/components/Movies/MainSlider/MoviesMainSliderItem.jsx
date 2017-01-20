import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import Image from 'components/Image/Image.jsx';
import Icon from 'components/Icon/Icon.jsx';

import styles from './MoviesMainSliderItem.scss';

@withRouter
export default class MoviesMainSliderItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { router, id } = this.props;

    router.push({ pathname: `/movies/single/${id}` });
  }

  render() {
    const {
      id,
      title,
      overview,
      backdrop
    } = this.props;

    return (
      <div className={styles.container} onClick={this.onClick}>
        <Image
          className={styles.image}
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt={title}
          width={984}
          height={553.5}
          scale={3}
        />
        <div className={styles.info_box}>
          <h3 className={styles.title}>{title}</h3>
          <hr className={styles.delimiter} />
          <span className={styles.overview}>{overview}</span>
          <Link to={`/movies/single/${id}`} className={styles.link}>
            Read more
            <Icon className={styles.icon} glyph="#arrow" />
          </Link>
        </div>
      </div>
    );
  }
}
