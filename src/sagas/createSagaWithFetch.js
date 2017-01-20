import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';

export default function* createSagaWithFetch(parameters) {
  const {
    types,
    callAPI,
    shouldCallAPI = () => true,
    getTitleVars = () => false,
    pagination = () => false,
    normalizing = (response) => response,
    getKeyFromAction = () => false
  } = parameters;

  const [REQUEST, SKIPPED, SUCCESS, FAILURE] = types;

  function* fetchData(action) {
    const prevState = yield select((state) => state);

    try {
      if (shouldCallAPI(prevState, action)) {
        const response = yield callAPI(action);

        if (action.title && getTitleVars(response)) {
          document.title = getTitleVars(response)
            .reduce(
              (title, item) => title.replace(/%s/, item),
              action.title
            );
        }

        yield put({
          type: SUCCESS,
          response: fromJS(normalizing(response)),
          key: getKeyFromAction(action),
          pagination: pagination(response)
        });
      } else {
        yield put({
          type: SKIPPED,
          key: getKeyFromAction(action)
        });
      }
    } catch (error) {
      yield put({
        type: FAILURE,
        error,
        key: getKeyFromAction(action)
      });
    }
  }

  yield takeEvery(REQUEST, fetchData);
}
