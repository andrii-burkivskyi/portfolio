import { createAction } from 'utils/actionCreator';

export default {
  ...createAction('TOGGLE_MODAL'),
  ...createAction('CLOSE_MODAL'),
  ...createAction('OPEN_MODAL')
};
