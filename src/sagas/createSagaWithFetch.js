import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

export default function* createSagaWithFetch(parameters) {
  const {
    types,
    callAPI,
    normalizing = (response) => response,
    getKeyFromAction = () => false
  } = parameters;

  const [REQUEST, SUCCESS, FAILURE] = types;

  function* fetchData(action) {
    try {
      const response = yield callAPI(action);

      yield put({
        type: SUCCESS,
        response: fromJS(normalizing(response)),
        key: getKeyFromAction(action)
      });
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
