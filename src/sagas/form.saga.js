import { takeEvery, delay } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

import { mailPopupFieldsSelector } from 'selectors/form.selector.js';

import { SUBMIT_FORM, clearForm } from 'actions/form.actions.js';
import { closeModal } from 'actions/modals.actions.js';

function* sendMail() {
  try {
    const formFields = yield select(mailPopupFieldsSelector);

    yield emailjs.send('gmail', 'mailcv',
      {
        theme: formFields.getIn(['theme', 'value']),
        email: formFields.getIn(['email', 'value']),
        message: formFields.getIn(['description', 'value'])
      });

    yield put({ type: SUBMIT_FORM.SUCCESS });

    yield delay(2000);

    yield put(closeModal('mailPopup'));

    yield put(clearForm());
  } catch (error) {
    yield put({ type: SUBMIT_FORM.FAILURE, error });
  }
}

export default function* watchFormActions() {
  yield takeEvery(SUBMIT_FORM.REQUEST, sendMail);
}
