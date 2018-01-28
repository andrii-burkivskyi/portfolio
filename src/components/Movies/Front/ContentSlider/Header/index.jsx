import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Icon from 'components/Icon';

import styles from './movies__content_slider_header.scss';

const SliderHeader = ({ title, path, prev, next }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>

    <nav className={styles.navigation}>
      <Link className={styles.button} to={path}>All</Link>

      <button
        className={styles.button}
        onClick={prev}
      >
        <Icon className={styles.icon_prev} glyph="#arrow" />
      </button>

      <button
        className={styles.button}
        onClick={next}
      >
        <Icon className={styles.icon_next} glyph="#arrow" />
      </button>
    </nav>
  </div>
);

SliderHeader.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  prev: PropTypes.func,
  next: PropTypes.func
};

export default SliderHeader;
