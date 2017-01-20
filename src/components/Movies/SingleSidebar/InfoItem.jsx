import React, { Component } from 'react';

import styles from './InfoItem.scss';

export default class InfoItem extends Component {
  render() {
    const { label, text, shouldDisplayed } = this.props;

    if (!shouldDisplayed) { return null; }

    return (
      <div className={styles.container}>
        <span className={styles.label}>{label}</span>
        <span className={styles.text}>{text}</span>
      </div>
    );
  }
}
