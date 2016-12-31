import getFetchActions from 'utils/getFetchActions.js';

export const FETCH_HEADER = getFetchActions('FETCH_HEADER');
export const FETCH_PROJECTS = getFetchActions('FETCH_PROJECTS');

export function fetchHeader() {
  return { type: FETCH_HEADER.REQUEST, key: 'projectListHeader' };
}

export function fetchProjects() {
  return { type: FETCH_PROJECTS.REQUEST };
}
