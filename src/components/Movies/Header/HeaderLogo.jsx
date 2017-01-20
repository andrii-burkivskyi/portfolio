import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './HeaderLogo.scss';

export default class HeaderLogo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link className={styles.logo} to="/movies">
          Movies
        </Link>
      </div>
    );
  }
}
