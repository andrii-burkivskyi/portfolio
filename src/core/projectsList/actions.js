import projectsListAPI from 'api/projects.api.js';
import { createFetchAction } from 'utils/actionCreator';
import { normalize } from 'normalizr';

import { PROJECTS_LIST } from './schema.js';

export default {
  ...createFetchAction({
    type: 'FETCH_PROJECTS_LIST_HEADER',
    callAPI: () => projectsListAPI.fetchHeader(),
    normalizing: (response) => response
  }),
  ...createFetchAction({
    type: 'FETCH_PROJECTS_LIST',
    callAPI: () => projectsListAPI.fetchProjects(),
    normalizing: (response) => normalize(response, PROJECTS_LIST)
  })
};
