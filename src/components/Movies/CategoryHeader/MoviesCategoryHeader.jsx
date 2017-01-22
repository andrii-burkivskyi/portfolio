import React, { Component } from 'react';

import styles from './MoviesCategoryHeader.scss';

export default class MoviesCategoryHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>
      </div>
    );
  }
}
