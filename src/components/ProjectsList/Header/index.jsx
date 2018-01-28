import React from 'react';
import PropTypes from 'prop-types';

import styles from './projects_list__header.scss';

const Header = ({ title, description }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <span className={styles.description}>
      {description}
    </span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Header;
