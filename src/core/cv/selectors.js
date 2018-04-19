import { createSelector } from 'reselect';
import get from 'lodash.get';

import cvDenormalize from './schema';

const cvBlocksEntities = (state) => get(state, ['entities', 'cvBlocks']);
const cvItemsEntities = (state) => get(state, ['entities', 'cvItems']);

const cvResults = (state, key) => get(state, ['cv', key, 'data']);

export const cvBlocksSelector = createSelector( // eslint-disable-line
  cvBlocksEntities,
  cvItemsEntities,
  cvResults,
  cvDenormalize
);
