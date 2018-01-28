import React from 'react';
import classNames from 'classnames';

import styles from './loader.scss';

const Loader = ({ text }) => (
  <div className={styles.container}>
    <svg
      className={styles.svg}
      viewBox="0 0 1000 1000"
    >
      <g transform="translate(500,500)">
        <rect
          className={classNames(styles.rotate_45, styles.rotate_back)}
          x="-5"
          y="-5"
          width="10"
          height="10"
          strokeWidth="20"
          fill="none"
        />
        <rect
          className={classNames(styles.rotate_45, styles.rotate)}
          x="-50"
          y="-50"
          width="100"
          height="100"
          strokeWidth="20"
          strokeLinejoin="bevel"
          fill="none"
        />
        <g transform="translate(-50,0) rotate(-45)">
          <polyline
            className={styles.left}
            points="40,-40 50,-50 -40,-50 -50,-40 -50,50 -40,40"
            strokeWidth="20"
            fill="none"
          />
        </g>
        <g transform="translate(50,0) rotate(135)">
          <polyline
            className={styles.right}
            points="40,-40 50,-50 -40,-50 -50,-40 -50,50 -40,40"
            strokeWidth="20"
            fill="none"
          />
        </g>
        <text y="-140" textAnchor="middle" fontWeight="bold" fontSize="4em" fontFamily="sans-serif">
          {text}
        </text>
      </g>
    </svg>
  </div>
);

export default Loader;
