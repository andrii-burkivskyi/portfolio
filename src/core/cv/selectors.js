import { createSelector } from 'reselect';
import _ from 'lodash';

import cvDenormalize from './schema';

const cvBlocksEntities = (state) => _.get(state, ['entities', 'cvBlocks']);
const cvItemsEntities = (state) => _.get(state, ['entities', 'cvItems']);

const cvResults = (state, key) => _.get(state, ['cv', key, 'data']);

export const cvBlocksSelector = createSelector( // eslint-disable-line
  cvBlocksEntities,
  cvItemsEntities,
  cvResults,
  cvDenormalize
);
