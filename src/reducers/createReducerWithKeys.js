import { fromJS } from 'immutable';

export default function createReducerWithKeys(parameters) {
  const {
    types,
    reducer,
    getKeyFromAction = (action) => action.key
  } = parameters;

  if (!Array.isArray(types) || types.length !== 5) {
    throw new Error('Expected [ types ] to be an array with 5 elements.');
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected [ reducer ] to be a function.');
  }

  if (typeof getKeyFromAction !== 'function') {
    throw new Error('Expected [ getKeyFromAction ] to be a function.');
  }

  const [REQUEST, SKIPPED, SUCCESS, FAILURE, CLEAR] = types;

  return (state = fromJS({}), action) => {
    switch (action.type) {
      case REQUEST:
      case SKIPPED:
      case SUCCESS:
      case FAILURE:
      case CLEAR: {
        const key = getKeyFromAction(action);

        if (typeof key !== 'string') {
          throw new Error('Expected key of pagination reducer should be a string');
        }

        return state
          .set(key, reducer(state.get(key), action));
      }
      default: {
        return state;
      }
    }
  };
}
