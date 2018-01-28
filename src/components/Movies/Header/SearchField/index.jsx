import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import styles from './movies_header__search_field.scss';

const SearchField = ({ value, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className={styles.container}>
    <input
      className={styles.search}
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
    <Icon className={styles.icon} glyph="#search" />
  </form>
);

SearchField.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default SearchField;
