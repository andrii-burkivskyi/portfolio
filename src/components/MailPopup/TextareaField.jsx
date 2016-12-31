import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { validate } from 'utils/validation.js';

import { changeField, allowValidation } from 'actions/form.actions.js';

import styles from './TextareaField.scss';

function mapStateToProps(state, ownProps) {
  return {
    value: state.getIn(['form', 'fields', ownProps.name, 'value']) || '',
    error: state.getIn(['form', 'fields', ownProps.name, 'error']) || '',
    touched: state.getIn(['form', 'fields', ownProps.name, 'touched'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeField: (fieldName, value, error) => dispatch(changeField(fieldName, value, error)),
    onAllowValidation: (fieldName) => dispatch(allowValidation(fieldName))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TextareaField extends Component {
  static defaultProps = {
    validators: []
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    const { name, validators, onChangeField } = this.props;
    const { value } = event.target;

    onChangeField(name, value, validate(value, validators));
  }

  onBlur(event) {
    const { name, onAllowValidation } = this.props;

    this.onChange(event);
    onAllowValidation(name);
  }

  render() {
    const { value, type, placeholder, error, touched } = this.props;
    const textarea = classNames(
      styles.textarea,
      (touched && error && styles.error)
    );

    return (
      <div className={styles.container}>
        <textarea
          className={textarea}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        {
          touched && error &&
          <span className={styles.error_message}>{error}</span>
        }
      </div>
    );
  }
}
