import { put, call, take, fork, takeEvery } from 'redux-saga/effects'
import initLoad from './initLoad'
import sendMsg from './sendMsg'
import runTheCard from './runTheCard'
import checkForUpdates from './checkForUpdates'
import burnTheMove from './burnTheMove'
//import debug from '../include/debug'


export default function* mainSaga() {

  yield take('CHOOSE_SCENARIO');
  yield fork(initLoad);
  yield take('INIT_DONE');

  yield put({type:'SHOW_NEXT_CARD'});
  yield put({type:'REARRANGE_PIECES'});
  yield put({type:'CALCULATE_POINTS'});

  yield takeEvery('MOVE_NORTH', sendMsg);
  yield takeEvery('MOVE_SOUTH', sendMsg);
  yield takeEvery('BURN_THE_MOVE', burnTheMove);

  yield takeEvery('SHOW_NEXT_CARD', runTheCard);

  while(true){
    yield call(checkForUpdates);
  }

}

/*
function* updateApi(data) {
  while (true) {
    try {
      const apiResponse = yield call(apiFetchData, { data });
      return apiResponse;
    } catch(error) {
      yield put({
        type: 'UPDATE_RETRY',
        error
      })
      yield call(delay, 5000);
    }
  }
}

function* updateResource({ data }) {
  const apiResponse = yield call(updateApi, data);
  yield put({
    type: 'UPDATE_SUCCESS',
    payload: apiResponse.body,
  });
}

export function* watchUpdateResource() {
  yield takeLatest('UPDATE_START', updateResource);
}
*/
