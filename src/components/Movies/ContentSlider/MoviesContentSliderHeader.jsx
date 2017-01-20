import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';

import styles from './MoviesContentSliderHeader.scss';

export default class MoviesContentSliderHeader extends Component {
  render() {
    const { title, path, prev, next } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <nav className={styles.navigation}>
          <Link className={styles.button} to={path}>All</Link>

          <button
            className={styles.button}
            onClick={prev}
          >
            <Icon className={styles.icon_prev} glyph={'#arrow'} />
          </button>

          <button
            className={styles.button}
            onClick={next}
          >
            <Icon className={styles.icon_next} glyph={'#arrow'} />
          </button>
        </nav>
      </div>
    );
  }
}
