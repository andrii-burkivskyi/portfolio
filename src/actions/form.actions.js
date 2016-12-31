import getFetchActions from 'utils/getFetchActions.js';

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ALLOW_VALIDATION = 'ALLOW_VALIDATION';
export const CLEAR_FORM = 'CLEAR_FORM';
export const SUBMIT_FORM = getFetchActions('SUBMIT_FORM');

export function changeField(fieldName, value, error) {
  return { type: CHANGE_FIELD, fieldName, value, error };
}

export function allowValidation(fieldName) {
  return { type: ALLOW_VALIDATION, fieldName };
}

export function clearForm() {
  return { type: CLEAR_FORM };
}

export function submitForm() {
  return { type: SUBMIT_FORM.REQUEST };
}
