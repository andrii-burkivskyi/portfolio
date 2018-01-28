import _ from 'lodash';
import { createSelector } from 'reselect';

const projectsListEntities = (state) => _.get(state, ['entities', 'projects']);
const projectsListResults = (state) => _.get(state, ['projectsList', 'projects', 'data']);

export const getProjectsListHeader = (state) => _.get(state, ['projectsList', 'header', 'data']);

export const getProjectsList = createSelector( // eslint-disable-line
  projectsListEntities,
  projectsListResults,
  (entities, results) => results.map((result) => _.get(entities, [result]))
);
