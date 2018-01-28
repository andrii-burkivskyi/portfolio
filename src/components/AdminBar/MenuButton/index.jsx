import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './admin_bar__menu_button.scss';

const containerClass = ({ isOpen }) => classNames(
  styles.container,
  isOpen && styles.is_open
);

const MenuButton = ({ isOpen, onClick }) => (
  <button className={containerClass({ isOpen })} onClick={onClick}>
    <span />
    <span />
    <span />
  </button>
);

MenuButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default MenuButton;
