import get from 'lodash.get';
import formActions from 'core/forms/actions';
import { withKey } from 'utils/reducerCreator';

const {
  CHANGE_INPUT, ALLOW_VALIDATION, CLEAR_FORM, SUBMIT_FORM
} = formActions;

const initialFieldState = {
  value: undefined,
  error: '',
  isTouched: false
};

function field(state = initialFieldState, action) {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        value: action.value,
        error: action.error
      };
    }

    case ALLOW_VALIDATION: {
      return { ...state, isTouched: true };
    }

    default: {
      return state;
    }
  }
}

const initialFormState = {
  fields: {},
  error: '',
  isTouched: false,
  isFetching: false
};

function form(state = initialFormState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
    case ALLOW_VALIDATION: {
      const fieldState = get(state, ['fields', action.fieldName]);
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.fieldName]: field(fieldState, action)
        }
      };
    }

    case CLEAR_FORM: {
      return initialFormState;
    }

    case SUBMIT_FORM.REQUEST: {
      return {
        ...state,
        isFetching: true,
        isTouched: true
      };
    }

    case SUBMIT_FORM.SUCCESS: {
      return {
        ...state,
        isFetching: false
      };
    }

    case SUBMIT_FORM.FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
}

export default withKey({
  types: [...SUBMIT_FORM.ALL, CHANGE_INPUT, ALLOW_VALIDATION, CLEAR_FORM],
  reducer: form,
  getKeyFromAction: (action) => action.formName
});
