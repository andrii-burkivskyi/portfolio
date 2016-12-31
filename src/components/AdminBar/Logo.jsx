import React, { Component } from 'react';

import AdminLink from './AdminLink.jsx';
import MenuButton from './MenuButton.jsx';

import styles from './Logo.scss';

export default class Logo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <AdminLink
          icon={'#logo'}
          style={{ width: '20px' }}
          to={'/'}
        >
          Andrii Burkivskyi
        </AdminLink>

        <MenuButton />
      </div>
    );
  }
}
