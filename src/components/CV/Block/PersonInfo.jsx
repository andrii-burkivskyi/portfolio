import React, { Component } from 'react';

import Icon from 'components/Icon/Icon.jsx';

import styles from './PersonInfo.scss';

export default class PersonInfo extends Component {
  render() {
    const { avatar, name, sername, position } = this.props;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={avatar} alt={sername} />
        <Icon className={styles.mask} glyph="#hexagon" />
        <h2 className={styles.name}>{name}</h2>
        <h2 className={styles.sername}>{sername}</h2>
        <h3 className={styles.position}>{position}</h3>
      </div>
    );
  }
}
