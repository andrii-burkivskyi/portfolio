import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';

import styles from './AdminButton.scss';

export default class AdminButton extends Component {
  render() {
    const { icon, children, isActive, isDisable, onClick } = this.props;
    const container = classNames(
      (isActive && styles.active),
      (isDisable && styles.disable),
      styles.container
    );

    return (
      <Link className={container} onClick={onClick}>
        <Icon className={styles.icon} glyph={icon} />
        <span className={styles.text}>{children}</span>
      </Link>
    );
  }

}
