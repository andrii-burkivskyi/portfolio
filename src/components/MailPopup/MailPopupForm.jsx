import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isRequired, isEmail } from 'utils/validation.js';

import { isFormValid } from 'selectors/form.selector.js';

import InputField from './InputField.jsx';
import TextareaField from './TextareaField.jsx';
import MailPopupFooter from './MailPopupFooter.jsx';

import './MailPopupForm.scss';

function mapStateToProps(state) {
  return {
    isMailFormValid: isFormValid(state)
  };
}

@connect(mapStateToProps)
export default class MailPopupForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { isMailFormValid, onSubmitForm } = this.props;

    event.preventDefault();

    if (isMailFormValid) {
      onSubmitForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputField
          type="text"
          name="theme"
          placeholder="Theme"
          validators={[isRequired]}
        />

        <InputField
          type="email"
          name="email"
          placeholder="Contact email"
          validators={[isRequired, isEmail]}
        />

        <TextareaField
          name="description"
        />

        <MailPopupFooter />
      </form>
    );
  }
}
