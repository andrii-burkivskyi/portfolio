import React, { Component } from 'react';

import styles from './WoodWrapper.scss';

export default class WoodWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
