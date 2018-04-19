import get from 'lodash.get';

export const getModalOpenStatus = (state, modalId) => // eslint-disable-line
  get(state, ['modals', modalId, 'isOpen'], false);
