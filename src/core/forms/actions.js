import { createAction, createRequestAction } from 'utils/actionCreator';
import { validate } from 'utils/validation';

const actions = {
  ...createAction('CHANGE_INPUT'),
  ...createAction('ALLOW_VALIDATION'),
  ...createAction('CLEAR_FORM'),
  ...createRequestAction('SUBMIT_FORM')
};

const changeInputField = (event, formName, fieldName, validations) => (dispatch) => {
  const { value } = event.target;
  const error = validate(value, validations);
  dispatch(actions.changeInput({
    value, error, formName, fieldName
  }));
};

const blurInputField = (event, formName, fieldName) => (dispatch) => {
  dispatch(actions.allowValidation({ formName, fieldName }));
};

export default {
  ...actions,
  changeInputField,
  blurInputField
};
