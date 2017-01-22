import React, { Component } from 'react';

import styles from './Header.scss';

export default class Header extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    );
  }
}
