import { createFetchReducer } from 'utils/reducerCreator';
import { combineReducers } from 'redux';

const header = createFetchReducer({
  type: 'FETCH_PROJECTS_LIST_HEADER',
  isObject: true,
  getDataFromAction: (action) => action.response
});
const projects = createFetchReducer({ type: 'FETCH_PROJECTS_LIST' });

export default combineReducers({ header, projects });
