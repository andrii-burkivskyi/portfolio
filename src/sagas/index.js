import watchFormActions from 'sagas/form.saga.js';
import watchFetchActions from 'sagas/fetch.saga.js';

export default function* rootSaga() {
  yield [
    watchFormActions(),
    watchFetchActions()
  ];
}
