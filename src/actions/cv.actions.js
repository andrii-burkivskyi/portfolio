import getFetchActions from 'utils/getFetchActions.js';

export const FETCH_CV = getFetchActions('FETCH_CV');

export function fetchCv(key) {
  return { type: FETCH_CV.REQUEST, key };
}
