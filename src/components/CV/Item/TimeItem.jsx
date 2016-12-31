import React, { Component } from 'react';

import styles from './TimeItem.scss';

export default class TimeItem extends Component {
  render() {
    const { position, time, organisation, description } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.position}>{position}</span>
          <span className={styles.delimiter}>/</span>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.info}>
          {
            organisation &&
            <span className={styles.organisation}>{organisation}:</span>
          }
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    );
  }
}
