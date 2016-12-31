import React, { Component } from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon/Icon.jsx';

import styles from './ListTitle.scss';

export default class ListTitle extends Component {
  render() {
    const { icon, title, black = false } = this.props;
    const container = classNames(
      styles.container,
      (black && styles.black)
    );

    return (
      <div className={container}>
        <div className={styles.background}>
          <Icon className={styles.icon} glyph={icon} />
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    );
  }
}
