import _ from 'lodash';

export const getQuery = (state) =>
  _.get(state, ['routing', 'locationBeforeTransitions', 'query']);
export const getPickedQuery = (state, queryKeys) => _.pick(getQuery(state), queryKeys);
