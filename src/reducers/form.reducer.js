import { fromJS } from 'immutable';
import {
  CHANGE_FIELD,
  ALLOW_VALIDATION,
  CLEAR_FORM,
  SUBMIT_FORM
} from 'actions/form.actions.js';

const initialFieldState = fromJS({
  value: '',
  error: '',
  touched: false
});

function field(state = initialFieldState, action) {
  switch (action.type) {
    case CHANGE_FIELD: {
      return state
        .set('value', action.value)
        .set('error', action.error || '');
    }

    case ALLOW_VALIDATION: {
      return state.set('touched', true);
    }

    default: {
      return state;
    }
  }
}

const initialFormState = fromJS({
  isFetching: false,
  error: '',
  touched: false,
  fields: {}
});

export default function form(state = initialFormState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
    case ALLOW_VALIDATION: {
      const fieldState = state.getIn(['fields', action.fieldName]);
      return state.setIn(['fields', action.fieldName], field(fieldState, action));
    }

    case CLEAR_FORM: {
      return initialFormState;
    }

    case SUBMIT_FORM.REQUEST: {
      return state
        .set('isFetching', true)
        .set('touched', true);
    }

    case SUBMIT_FORM.SUCCESS: {
      return state
        .set('isFetching', false);
    }

    case SUBMIT_FORM.FAILURE: {
      return state
        .set('isFetching', false)
        .set('error', action.error);
    }

    default: {
      return state;
    }

  }
}
