import React, { Component } from 'react';

import styles from './Blank.scss';

export default class Blank extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
