import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Navigation.scss';

export default class Navigation extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <Link className={styles.link} to="/movies/movies">Movies</Link>
        <Link className={styles.link} to="/movies/serials">Serials</Link>
        <Link className={styles.link} to="/movies/actors">Actors</Link>
      </nav>
    );
  }
}
