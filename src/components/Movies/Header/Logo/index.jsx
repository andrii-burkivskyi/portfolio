import React from 'react';
import { Link } from 'react-router';

import styles from './movies_header__logo.scss';

const Logo = () => (
  <div className={styles.container}>
    <Link className={styles.logo} to="/movies">
      Movies
    </Link>
  </div>
);

export default Logo;
