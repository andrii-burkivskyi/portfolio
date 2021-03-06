import React from 'react';
import PropTypes from 'prop-types';

import styles from './movies__page_wrapper.scss';

const PageWrapper = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node
};

export default PageWrapper;
