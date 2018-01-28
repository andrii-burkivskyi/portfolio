import _ from 'lodash';

const requestActionStates = ['request', 'skipped', 'success', 'failure', 'clear'];

export const createAction = (type) => ({
  [type]: type,
  [_.camelCase(type)]: (payload) => ({ type, ...payload })
});

export const createRequestAction = (type) => requestActionStates.reduce((acc, state) => ({
  ...acc,
  [type]: {
    ...acc[type],
    [`${_.toUpper(state)}`]: `${type}_${_.toUpper(state)}`,
    ALL: acc[type]
      ? [...acc[type].ALL, `${type}_${_.toUpper(state)}`]
      : [`${type}_${_.toUpper(state)}`]
  },
  [`${_.camelCase(type)}${_.capitalize(state)}`]: (payload) => ({
    type: `${type}_${_.toUpper(state)}`,
    ...payload
  })
}), {});

export const createFetchAction = (parameters) => {
  const {
    name = _.camelCase(parameters.type),
    type,
    callAPI,
    shouldCallAPI = () => true,
    pagination = () => undefined,
    normalizing = (response) => response,
    getKeyFromAction = () => undefined
  } = parameters;

  const actionConstants = createRequestAction(type)[type];
  const { REQUEST, SKIPPED, SUCCESS, FAILURE } = actionConstants;

  const funcAction = (action = {}) => async (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: REQUEST,
      key: getKeyFromAction(action)
    });

    try {
      if (shouldCallAPI(action, state)) {
        const response = await callAPI(action, state);

        dispatch({
          type: SUCCESS,
          response: normalizing(response),
          key: getKeyFromAction(action),
          pagination: pagination(response)
        });
      } else {
        dispatch({
          type: SKIPPED,
          key: getKeyFromAction(action)
        });
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
      dispatch({
        type: FAILURE,
        error,
        key: getKeyFromAction(action)
      });
    }
  };

  return { ...createRequestAction(type), [name]: funcAction };
};