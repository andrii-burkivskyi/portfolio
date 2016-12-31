export const mailPopupFieldsSelector =
  (state) => state.getIn(['form', 'fields']);

export const isFormValid =
  (state) => !state.getIn(['form', 'fields'])
    .some((field) => field.get('error'));
