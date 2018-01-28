import _ from 'lodash';

export const getModalOpenStatus = (state, modalId) => // eslint-disable-line
  _.get(state, ['modals', modalId, 'isOpen'], false);
