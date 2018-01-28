import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './cv__chart_item.scss';

const containerClass = ({ color }) => classNames(
  styles.container,
  styles[color]
);

const ChartItem = ({ value, text, color }) => (
  <div className={containerClass({ color })}>
    <span className={styles.text}>
      {text}
    </span>

    <span
      className={styles.chart}
      style={{ backgroundSize: `${value} 100%` }}
    >
      {' '}
    </span>
  </div>
);

ChartItem.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
};

ChartItem.defaultProps = {
  color: 'black'
};

export default ChartItem;

