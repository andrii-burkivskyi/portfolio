import React, { Component } from 'react';

import HeaderLogo from 'components/Movies/Header/HeaderLogo.jsx';
import SearchField from 'components/Movies/Header/SearchField.jsx';

import styles from './MoviesHeader.scss';

export default class MoviesHeader extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderLogo />
        <SearchField />
      </div>
    );
  }
}
