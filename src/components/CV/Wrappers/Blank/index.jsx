import React from 'react';

import styles from './cv__blank.scss';

const Blank = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.blank}>
      {children}
    </div>
  </div>
);

export default Blank;
