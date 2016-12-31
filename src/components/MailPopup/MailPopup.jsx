import React, { Component } from 'react';
import { connect } from 'react-redux';

import OverlayWrapper from 'components/Wrappers/OverlayWrapper.jsx';
import MailPopupHeader from 'components/MailPopup/MailPopupHeader.jsx';
import MailPopupForm from 'components/MailPopup/MailPopupForm.jsx';
import MailPopupInfo from 'components/MailPopup/MailPopupInfo.jsx';

import { submitForm } from 'actions/form.actions.js';

import styles from './MailPopup.scss';

function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['modals', 'mailPopup', 'isOpen'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: () => dispatch(submitForm())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MailPopup extends Component {
  render() {
    const { isOpen, onSubmitForm } = this.props;

    return (
      <OverlayWrapper isOpen={isOpen}>
        <div className={styles.popup}>
          <MailPopupHeader />

          <MailPopupForm onSubmitForm={onSubmitForm} />

          <MailPopupInfo />
        </div>
      </OverlayWrapper>
    );
  }
}
