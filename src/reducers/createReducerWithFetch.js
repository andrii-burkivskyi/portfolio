import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  data: [],
  error: null
});

export default function createReducerWithFetch(parameters) {
  const {
    types,
    getDataFromAction = (action) => action.response.get('result'),
    getErrorFromAction = (action) => action.error
  } = parameters;


  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected [ types ] tobe an array with 3 elements.');
  }

  if (typeof getDataFromAction !== 'function') {
    throw new Error('Expected [ getDataFromAction ] to be a function.');
  }

  if (typeof getErrorFromAction !== 'function') {
    throw new Error('Expected [ getErrorFromAction ] to be a function.');
  }

  const [REQUEST, SUCCESS, FAILURE] = types;

  return (state = initialState, action) => {
    switch (action.type) {
      case REQUEST: {
        return state.set('isFetching', true);
      }

      case SUCCESS: {
        return state
          .set('isFetching', false)
          .set('data', getDataFromAction(action))
          .set('error', null);
      }

      case FAILURE: {
        return state
          .set('isFetching', false)
          .set('error', getErrorFromAction(action));
      }
      default: {
        return state;
      }
    }
  };
}
