import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal__footer.scss';

const Footer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
