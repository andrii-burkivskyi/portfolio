import formActions from 'core/forms/actions';
import modalsActions from 'core/modals/actions';
import { getInputFieldValue } from 'core/forms/selectors';

const sendMailPopup = () => async (dispatch, getState) => {
  try {
    dispatch(formActions.submitFormRequest({ formName: 'mailPopup' }));
    const theme = getInputFieldValue(getState(), 'mailPopup', 'theme');
    const email = getInputFieldValue(getState(), 'mailPopup', 'email');
    const message = getInputFieldValue(getState(), 'mailPopup', 'message');

    await emailjs.send('gmail', 'mailcv', { theme, email, message });

    dispatch(formActions.submitFormSuccess({ formName: 'mailPopup' }));
    dispatch(formActions.clearForm({ formName: 'mailPopup' }));
    dispatch(modalsActions.closeModal({ modalName: 'mailPopup' }));
  } catch (error) {
    dispatch(formActions.submitFormFailure({ formName: 'mailPopup' }));
    dispatch(modalsActions.closeModal({ modalName: 'mailPopup' }));
  }
};

export default {
  sendMailPopup
};
