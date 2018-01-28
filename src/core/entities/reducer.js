import _ from 'lodash';

const initialState = {};

export default function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities);
  }

  return state;
}
