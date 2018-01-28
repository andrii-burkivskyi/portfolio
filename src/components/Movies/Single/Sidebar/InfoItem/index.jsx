import React from 'react';
import PropTypes from 'prop-types';

import styles from './movies_single__info_item.scss';

const InfoItem = ({ label, text }) => {
  if (!text) { return null; }

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

InfoItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default InfoItem;
