import React, { Component } from 'react';

import styles from './MoviesMainWrapper.scss';

export default class MoviesMainWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
