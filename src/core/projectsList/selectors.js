import get from 'lodash.get';
import { createSelector } from 'reselect';

const projectsListEntities = (state) => get(state, ['entities', 'projects']);
const projectsListResults = (state) => get(state, ['projectsList', 'projects', 'data']);

export const getProjectsListHeader = (state) => get(state, ['projectsList', 'header', 'data']);

export const getProjectsList = createSelector( // eslint-disable-line
  projectsListEntities,
  projectsListResults,
  (entities, results) => results.map((result) => get(entities, [result]))
);
