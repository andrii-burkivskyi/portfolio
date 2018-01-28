import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image/Image';

import styles from './movies_single__cast_item.scss';

const imageUrl = (profile) => profile && `https://image.tmdb.org/t/p/w300${profile}`;

const Item = ({ profile, name, character }) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={imageUrl(profile)}
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

Item.propTypes = {
  profile: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string
};

export default Item;
