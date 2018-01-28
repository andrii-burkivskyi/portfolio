import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import styles from './cv__person_info.scss';

const PersonInfo = ({ avatar, name, sername, position }) => (
  <div className={styles.container}>
    <img className={styles.image} src={avatar} alt={sername} />
    <Icon className={styles.mask} glyph="#hexagon" />
    <h2 className={styles.name}>{name}</h2>
    <h2 className={styles.sername}>{sername}</h2>
    <h3 className={styles.position}>{position}</h3>
  </div>
);

PersonInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  sername: PropTypes.string,
  position: PropTypes.string
};

export default PersonInfo;

