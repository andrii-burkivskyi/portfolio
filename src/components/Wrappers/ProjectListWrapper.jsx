import React, { Component } from 'react';

import styles from './ProjectListWrapper.scss';

export default class ProjectListWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
