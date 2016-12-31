import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './ChartItem.scss';

export default class ChartItem extends Component {
  render() {
    const { value, text, black = false } = this.props;
    const container = classNames(
      styles.container,
      (black && styles.black)
    );

    return (
      <div className={container}>
        <span className={styles.text}>
          {text}
        </span>

        <span
          className={styles.chart}
          style={{ backgroundSize: `${value} 100%` }}
        />
      </div>
    );
  }
}
