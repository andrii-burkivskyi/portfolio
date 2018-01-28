import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Icon from 'components/Icon';

import styles from './admin_bar__menu_item.scss';

const MenuItem = ({ icon, to, href, children, iconStyle, onClick }) => (
  <Link
    className={styles.container}
    to={to}
    href={href}
    onClick={onClick}
  >
    <Icon className={styles.icon} glyph={icon} style={iconStyle} />
    <span className={styles.text}>{children}</span>
  </Link>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  iconStyle: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node
};


export default MenuItem;
