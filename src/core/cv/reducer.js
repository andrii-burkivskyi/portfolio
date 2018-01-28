import { withKey, createFetchReducer } from 'utils/reducerCreator';

const reducer = withKey({
  type: 'FETCH_CV',
  reducer: createFetchReducer({
    type: 'FETCH_CV'
  })
});

export default reducer;
