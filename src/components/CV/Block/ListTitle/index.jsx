import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from 'components/Icon';

import styles from './cv__list_title.scss';

const containerClass = ({ color }) => classNames(
  styles.container,
  styles[color]
);

const ListTitle = ({ icon, title, color }) => (
  <div className={containerClass({ color })}>
    <div className={styles.background}>
      <Icon className={styles.icon} glyph={icon} />
      <span className={styles.title}>{title}</span>
    </div>
  </div>
);

ListTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string
};

ListTitle.defaultProps = {
  color: 'black'
};

export default ListTitle;

