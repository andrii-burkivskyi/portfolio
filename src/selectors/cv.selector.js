import { createSelector } from 'reselect';

import cvDenormalize from 'schema/cv.denormalize.js';

const cvBlocksEntities = (state) => state.getIn(['entities', 'cvBlocks']);
const cvItemsEntities = (state) => state.getIn(['entities', 'cvItems']);

const cvSidebarResults = (state) => state.getIn(['cv', 'cv.sidebar.json', 'data']);
const cvContentResults = (state) => state.getIn(['cv', 'cv.content.json', 'data']);

export const cvSidebarBlocksSelector = createSelector(
  cvBlocksEntities,
  cvItemsEntities,
  cvSidebarResults,
  cvDenormalize
);

export const cvContentBlocksSelector = createSelector(
  cvBlocksEntities,
  cvItemsEntities,
  cvContentResults,
  cvDenormalize
);
