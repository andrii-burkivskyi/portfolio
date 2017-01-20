import { fromJS, OrderedSet } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  data: new OrderedSet(),
  error: null
});

export default function createReducerWithFetch(parameters) {
  const {
    types,
    getDataFromAction = (action) => action.response.get('result'),
    getErrorFromAction = (action) => action.error,
    getPaginationFromAction = () => false
  } = parameters;


  if (!Array.isArray(types) || types.length !== 5) {
    throw new Error('Expected [ types ] to be an array with 5 elements.');
  }

  if (typeof getDataFromAction !== 'function') {
    throw new Error('Expected [ getDataFromAction ] to be a function.');
  }

  if (typeof getErrorFromAction !== 'function') {
    throw new Error('Expected [ getErrorFromAction ] to be a function.');
  }

  if (typeof getPaginationFromAction !== 'function') {
    throw new Error('Expected [ getPaginationFromAction ] to be a function.');
  }

  const [REQUEST, SKIPPED, SUCCESS, FAILURE, CLEAR] = types;

  return (state = initialState, action) => {
    switch (action.type) {
      case REQUEST: {
        return state.set('isFetching', true);
      }

      case SKIPPED: {
        return state.set('isFetching', false);
      }

      case SUCCESS: {
        return state
          .set('isFetching', false)
          .set('data', state.get('data').union(getDataFromAction(action)))
          .set('error', null)
          .merge(getPaginationFromAction(action) || {});
      }

      case FAILURE: {
        return state
          .set('isFetching', false)
          .set('error', getErrorFromAction(action));
      }

      case CLEAR: {
        return initialState;
      }

      default: {
        return state;
      }
    }
  };
}
