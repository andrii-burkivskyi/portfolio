import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';

import styles from './LinkItem.scss';

export default class LinkItem extends Component {
  render() {
    const { icon, text, url } = this.props;

    return (
      <div className={styles.container}>
        <Icon className={styles.icon} glyph={icon} />
        <Link
          className={styles.text}
          href={url}
        >
          {text}
        </Link>
      </div>
    );
  }
}
