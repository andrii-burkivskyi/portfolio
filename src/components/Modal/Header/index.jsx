import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import styles from './modal__header.scss';

const Header = ({ title, onClose }) => (
  <div className={styles.container}>
    {
      title &&
        <span className={styles.title}>{title}</span>
    }
    {
      onClose &&
        <button className={styles.button} onClick={onClose}>
          <Icon className={styles.icon} glyph="#close-button" />
        </button>
    }
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default Header;
