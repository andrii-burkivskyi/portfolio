import React from 'react';
import PropTypes from 'prop-types';

import styles from './movies_category__header.scss';

const Header = ({ title }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {title}
    </h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
