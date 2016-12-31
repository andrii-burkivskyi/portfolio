import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';

import styles from './AdminLink.scss';

export default class AdminLink extends Component {
  render() {
    const { icon, to, href, children, adminBarClose, onClick, style } = this.props;

    return (
      <Link
        className={styles.container}
        to={to}
        href={href}
        onClick={onClick || adminBarClose}
      >
        <Icon className={styles.icon} glyph={icon} style={style} />
        <span className={styles.text}>{children}</span>
      </Link>
    );
  }

}
