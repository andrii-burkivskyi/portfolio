import React, { Component } from 'react';

import styles from './OverlayWrapper.scss';

export default class OverlayWrapper extends Component {
  componentWillReceiveProps(nextProps) {
    const body = document.getElementsByTagName('body')[0];

    if (nextProps.isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  render() {
    const { children, isOpen } = this.props;

    if (!isOpen) { return null; }

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
