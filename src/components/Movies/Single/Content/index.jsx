import React from 'react';
import PropTypes from 'prop-types';

import CastItem from './CastItem';

import styles from './movies_single__content.scss';

const Content = ({ cast, title, overview }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {title}
    </h2>

    <div className={styles.overview}>
      {overview}
    </div>
    {
      cast && cast.length > 0 &&
      <h3 className={styles.cast_title}>
        Actors:
      </h3>
    }
    <div className={styles.cast_list}>
      {
        (cast ? cast.slice(0, 10) : []).map((castItem) => (
          <CastItem
            key={castItem.credit_id}
            profile={castItem.profile_path}
            name={castItem.name}
            character={castItem.character}
          />
        ))
      }
    </div>
  </div>
);

Content.propTypes = {
  cast: PropTypes.array,
  title: PropTypes.string,
  overview: PropTypes.string
};

export default Content;
