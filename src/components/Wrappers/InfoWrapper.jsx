import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './InfoWrapper.scss';

export default class InfoWrapper extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.container}>
        {
          title &&
          <h3 className={styles.title}>
            {title}
          </h3>
        }

        <div className={styles.content}>
          {children}
        </div>

        <Link
          className={styles.link}
          to="/"
        >
          Back to home page
        </Link>
      </div>
    );
  }
}
