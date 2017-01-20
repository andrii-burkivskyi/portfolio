import React, { Component } from 'react';

import styles from './Header.scss';

export default class Header extends Component {
  render() {
    const { title, description, image } = this.props;

    return (
      <div className={styles.container} style={image && { backgroundImage: `url(${image})` }}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    );
  }
}
