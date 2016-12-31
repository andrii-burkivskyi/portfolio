import { normalize } from 'normalizr';
import createSagaWithFetch from 'sagas/createSagaWithFetch.js';

import { FETCH_CV } from 'actions/cv.actions.js';
import { FETCH_HEADER, FETCH_PROJECTS } from 'actions/projects.actions.js';

import cvAPI from 'api/cv.api.js';
import projectListAPI from 'api/projects.api.js';

import { CV_BLOCKS_LIST } from 'schema/cv.schema.js';
import { PROJECT_LIST } from 'schema/projects.schema.js';

export default function* watchFetchActions() {
  const fetchHeader = createSagaWithFetch({
    types: FETCH_HEADER.ALL,
    callAPI: () => projectListAPI.fetchHeader(),
    normalizing: (response) => response,
    getKeyFromAction: (action) => action.key
  });

  const fetchProjects = createSagaWithFetch({
    types: FETCH_PROJECTS.ALL,
    callAPI: () => projectListAPI.fetchProjects(),
    normalizing: (response) => normalize(response, PROJECT_LIST)
  });

  const fetchCV = createSagaWithFetch({
    types: FETCH_CV.ALL,
    callAPI: (action) => cvAPI.fetchData(action.key),
    normalizing: (response) => normalize(response.blocks, CV_BLOCKS_LIST),
    getKeyFromAction: (action) => action.key
  });

  yield [
    fetchHeader,
    fetchProjects,
    fetchCV
  ];
}
