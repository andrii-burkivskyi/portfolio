import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Icon from 'components/Icon';

import styles from './cv__link_item.scss';

const LinkItem = ({ icon, text, url }) => (
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

LinkItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
};

export default LinkItem;

