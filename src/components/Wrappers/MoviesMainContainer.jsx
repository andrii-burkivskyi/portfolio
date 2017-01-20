import React, { Component } from 'react';

import styles from './MoviesMainContainer.scss';

export default class MoviesMainContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
