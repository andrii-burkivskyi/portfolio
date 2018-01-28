import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { compose, lifecycle } from 'utils/hoc';

import { getInputFieldValue, getFieldError, getIsFieldOrFormTouched } from 'core/forms/selectors';
import formsActions from 'core/forms/actions';

import styles from './form_textarea.scss';

const inputClass = ({ isTouched, error }) => classNames(
  styles.field,
  isTouched && Boolean(error) && styles.field_error
);

const mapStateToProps = (state, { formName, fieldName }) => ({
  value: getInputFieldValue(state, formName, fieldName),
  isTouched: getIsFieldOrFormTouched(state, formName, fieldName),
  error: getFieldError(state, formName, fieldName)
});

const mapDispatchToProps = (dispatch, { formName, fieldName, validations }) => ({
  onChange: (event) =>
    dispatch(formsActions.changeInputField(event, formName, fieldName, validations)),
  onBlur: (event) =>
    dispatch(formsActions.blurInputField(event, formName, fieldName))
});

const Textarea = ({ value, placeholder, isTouched, error, validations, onChange, onBlur }) => (
  <div className={styles.container}>
    <textarea
      className={inputClass({ isTouched, error })}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {
      validations && isTouched && Boolean(error) &&
        <span className={styles.error_message}>{error}</span>
    }
  </div>
);

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isTouched: PropTypes.bool,
  error: PropTypes.string,
  validations: PropTypes.arrayOf(PropTypes.array)
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { onChange, value } = this.props;
      onChange({ target: { value } });
    }
  })
)(Textarea);
