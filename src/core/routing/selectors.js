import pick from 'lodash.pick';
import get from 'lodash.get';

export const getQuery = (state) =>
  get(state, ['routing', 'locationBeforeTransitions', 'query']);
export const getPickedQuery = (state, queryKeys) => pick(getQuery(state), queryKeys);
