import React from 'react';
import PropTypes from 'prop-types';

import styles from './cv__time_item.scss';

const TimeItem = ({ position, time, organisation, description }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <span className={styles.position}>{position}</span>
      <span className={styles.delimiter}>/</span>
      <span className={styles.time}>{time}</span>
    </div>
    <div className={styles.info}>
      {
        organisation &&
        <span className={styles.organisation}>{organisation}:</span>
      }
      <span className={styles.description}>{description}</span>
    </div>
  </div>
);

TimeItem.propTypes = {
  position: PropTypes.string,
  time: PropTypes.string,
  organisation: PropTypes.string,
  description: PropTypes.string
};

export default TimeItem;
