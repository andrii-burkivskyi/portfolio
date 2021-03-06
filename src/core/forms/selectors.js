import { createSelector } from 'reselect';
import { DEFAULT_OBJECT } from 'utils/constants';
import get from 'lodash.get';

export const getInputFieldValue = (state, formName, fieldName) =>
  get(state, ['forms', formName, 'fields', fieldName, 'value'], '');
export const getFieldError = (state, formName, fieldName) =>
  get(state, ['forms', formName, 'fields', fieldName, 'error'], '');
export const getIsFieldTouched = (state, formName, fieldName) =>
  get(state, ['forms', formName, 'fields', fieldName, 'isTouched'], false);

export const getFormError = (state, formName) =>
  get(state, ['forms', formName, 'error'], '');
export const getIsFormFetching = (state, formName) =>
  get(state, ['forms', formName, 'isFetching'], false);
export const getIsFormTouched = (state, formName) =>
  get(state, ['forms', formName, 'isTouched'], false);
export const getFormFields = (state, formName) =>
  get(state, ['forms', formName, 'fields'], DEFAULT_OBJECT);

export const getIsFormValid = createSelector(
  [getFormFields],
  (fields) => !Object.keys(fields).reduce((acc, value) => acc || fields[value].error, '')
);

export const getIsFieldOrFormTouched = createSelector(
  [getIsFieldTouched, getIsFormTouched],
  (isFieldTouched, isFormTouched) => isFormTouched || isFieldTouched
);
