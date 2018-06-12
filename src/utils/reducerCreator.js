import union from 'lodash.union';
import { createRequestAction } from 'utils/actionCreator';

const initialStateList = {
  isFetching: false,
  data: [],
  error: null
};

const initialStateObject = {
  isFetching: false,
  data: {},
  error: null
};

export function createFetchReducer(parameters) {
  const {
    type,
    isObject,
    getDataFromAction = (action) => action.response.result,
    getErrorFromAction = (action) => action.error,
    getPaginationFromAction = () => {}
  } = parameters;

  if (typeof type !== 'string') {
    throw new Error('Expected [ type ] to be a string.');
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

  const {
    REQUEST, SKIPPED, SUCCESS, FAILURE, CLEAR
  } = createRequestAction(type)[type];
  const initialState = isObject ? initialStateObject : initialStateList;

  return (state = initialState, action) => {
    switch (action.type) {
      case REQUEST: {
        return { ...state, isFetching: true };
      }

      case SKIPPED: {
        return { ...state, isFetching: false };
      }

      case SUCCESS: {
        const data = isObject
          ? getDataFromAction(action)
          : union(state.data, getDataFromAction(action));

        return {
          ...state,
          isFetching: false,
          error: null,
          data,
          ...getPaginationFromAction(action)
        };
      }

      case FAILURE: {
        return {
          ...state,
          isFetching: false,
          error: getErrorFromAction(action)
        };
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

export function withKey(parameters) {
  const {
    type,
    types,
    reducer,
    getKeyFromAction = (action) => action.key
  } = parameters;

  if (type && typeof type !== 'string') {
    throw new Error('Expected [ type ] to be a string.');
  }

  if (types && !Array.isArray(types)) {
    throw new Error('Expected [ types ] to be an array.');
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected [ reducer ] to be a function.');
  }

  if (typeof getKeyFromAction !== 'function') {
    throw new Error('Expected [ getKeyFromAction ] to be a function.');
  }

  const resultTypes = type
    ? createRequestAction(type)[type].ALL
    : types;

  return (state = {}, action) => {
    if (resultTypes.includes(action.type)) {
      const key = getKeyFromAction(action);

      if (typeof key !== 'string') {
        throw new Error('Expected key of pagination reducer should be a string');
      }

      return {
        ...state,
        [key]: reducer(state[key], action)
      };
    }

    return state;
  };
}
