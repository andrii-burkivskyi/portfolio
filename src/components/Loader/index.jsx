import React from 'react';
import classNames from 'classnames';

import styles from './loader.scss';

const Loader = ({ text }) => (
  <div className={styles.container}>
    <div className={styles.spinner}>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />

    </div>

    <div className={styles.text}>{text}</div>
  </div>
);

export default Loader;
