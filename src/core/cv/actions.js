import cvAPI from 'api/cv.api.js';
import { createFetchAction } from 'utils/actionCreator';
import { normalize } from 'normalizr';

import { CV_BLOCKS_LIST } from './schema.js';

export default {
  ...createFetchAction({
    type: 'FETCH_CV',
    callAPI: (action) => cvAPI.fetchData(action.key),
    normalizing: (response) => normalize(response.blocks, CV_BLOCKS_LIST),
    getKeyFromAction: (action) => action.key
  })
};
