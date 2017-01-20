import React, { Component } from 'react';

import Image from 'components/Image/Image.jsx';

import styles from './CastItem.scss';

export default class CastItem extends Component {
  constructor(props) {
    super(props);

    this.getImageUrl = this.getImageUrl.bind(this);
  }

  getImageUrl() {
    const { profile } = this.props;

    return profile && `https://image.tmdb.org/t/p/w300${profile}`;
  }

  render() {
    const { name, character } = this.props;
    const profile = this.getImageUrl();

    return (
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={profile}
          alt={name}
          width={95}
          height={142.5}
          scale={2.5}
        />

        <span className={styles.name}>
          {name}
        </span>

        <span className={styles.character}>
          {character}
        </span>
      </div>
    );
  }
}
