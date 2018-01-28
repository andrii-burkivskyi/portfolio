import React from 'react';
import { Link } from 'react-router';

import styles from './page_not_found.scss';

const PageNotFound = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>
      404
    </h3>

    <div className={styles.content}>
      Page not found
    </div>

    <Link
      className={styles.link}
      to="/"
    >
      Back to home page
    </Link>
  </div>
);

export default PageNotFound;
