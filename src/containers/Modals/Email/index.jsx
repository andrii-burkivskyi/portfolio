import React from 'react';
import { connect } from 'react-redux';

import Modal, { Header, Content, Footer } from 'components/Modal';
import Button from 'components/Button';
import { Input, Textarea } from 'containers/Form';

import { isRequired, isEmail } from 'utils/validation';

import { getModalOpenStatus } from 'core/modals/selectors';
import { getIsFormFetching, getIsFormValid } from 'core/forms/selectors';
import formsActions from 'core/forms/actions';
import modalsActions from 'core/modals/actions';
import mailPopupActions from 'core/forms/mailPopup/actions';

const themeValidation = [
  [isRequired, 'This field is required']
];

const emailValidation = [
  [isRequired, 'This field is required'],
  [isEmail, 'Email should be valid']
];

const mapStateToProps = (state) => ({
  isMailPopupOpen: getModalOpenStatus(state, 'mailPopup'),
  isMailPopupSending: getIsFormFetching(state, 'mailPopup'),
  isMailPopupValid: getIsFormValid(state, 'mailPopup')
});

const mapDispatchToProps = (dispatch) => ({
  closeMailPopup: () => {
    dispatch(modalsActions.closeModal({ modalName: 'mailPopup' }));
    dispatch(formsActions.clearForm({ formName: 'mailPopup' }));
  },
  sendMailPopup: () => dispatch(mailPopupActions.sendMailPopup())
});

const EmailModal = ({ isMailPopupOpen, isMailPopupSending, isMailPopupValid, ...actions }) => (
  <Modal isOpen={isMailPopupOpen}>
    <Header title="Contact letter:" onClose={actions.closeMailPopup} />
    <Content isLoading={isMailPopupSending} loadingText="Sending email...">
      <Input
        formName="mailPopup"
        fieldName="theme"
        placeholder="Theme"
        validations={themeValidation}
      />
      <Input
        formName="mailPopup"
        fieldName="email"
        placeholder="Contact email"
        validations={emailValidation}
      />
      <Textarea
        formName="mailPopup"
        fieldName="message"
      />
    </Content>
    <Footer>
      <Button
        text="Send letter"
        glyph="#sent-mail"
        iconPosition="right"
        theme="popup"
        isDisable={isMailPopupSending || !isMailPopupValid}
        onClick={actions.sendMailPopup}
      />
    </Footer>
  </Modal>
);

export default connect(mapStateToProps, mapDispatchToProps)(EmailModal);
