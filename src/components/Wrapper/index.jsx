import React from 'react';
import PropTypes from 'prop-types';

import bem from 'utils/bem';

import styles from './wrapper.scss';

const Wrapper = ({ theme, children }) => (
  <div className={bem(styles.container, {theme})}>
    {children}
  </div>
);

Wrapper.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node
};

export default Wrapper;
