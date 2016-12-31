import { createSelector } from 'reselect';

const projectListEntities = (state) => state.getIn(['entities', 'projects']);
const projectListResults = (state) => state.getIn(['projects', 'data']);

export const projectListSelector = createSelector( // eslint-disable-line
  projectListEntities,
  projectListResults,
  (entities, results) => results.map((result) => entities.get(result))
);
