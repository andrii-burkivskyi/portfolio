import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, pure } from 'utils/hoc';

import HeaderLogo from 'components/Movies/Header/Logo';
import SearchField from 'components/Movies/Header/SearchField';

import { getInputFieldValue } from 'core/forms/selectors';

import formsActions from 'core/forms/actions';
import searchActions from 'core/forms/search/actions';

import styles from './movies_header.scss';

const mapStateToProps = (state) => ({
  value: getInputFieldValue(state, 'search', 'field')
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(formsActions.changeInputField(event, 'search', 'field')),
  onSubmit: (event) => dispatch(searchActions.submitSearch(event))
});

const MoviesHeader = ({ value, onChange, onSubmit }) => (
  <div className={styles.container}>
    <HeaderLogo />
    <SearchField value={value} onChange={onChange} onSubmit={onSubmit} />
  </div>
);

MoviesHeader.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure()
)(MoviesHeader);
