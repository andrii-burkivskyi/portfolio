import { combineReducers } from 'redux-immutable';

import routing from 'reducers/routing.reducer.js';
import entities from 'reducers/entities.reducer.js';
import modals from 'reducers/modals.reducer.js';
import form from 'reducers/form.reducer.js';
import * as fetchReducers from 'reducers/fetch.reducer.js';

export default combineReducers({
  routing,
  entities,
  modals,
  form,
  ...fetchReducers
});
