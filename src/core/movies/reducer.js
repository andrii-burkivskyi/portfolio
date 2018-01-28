import { withKey, createFetchReducer } from 'utils/reducerCreator';

const movies = withKey({
  type: 'FETCH_MOVIES',
  reducer: createFetchReducer({
    type: 'FETCH_MOVIES',
    getPaginationFromAction: (action) => action.pagination
  })
});

export default movies;
