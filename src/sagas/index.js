import { put, call, take, fork, takeEvery } from 'redux-saga/effects'
import initLoad from './initLoad'
import runTheCard from './runTheCard'
import checkForUpdates from './checkForUpdates'
import getMyIndex from './getMyIndex'
import initGame from './initGame'
//import debug from '../include/debug'


export default function* mainSaga() {

  yield call(getMyIndex);
  yield fork(initLoad);
  yield takeEvery('CHOOSE_SCENARIO', initGame);

  yield take('GAME_SETUP_READY');

  yield put({type:'REARRANGE_PIECES'});
  yield put({type:'CALCULATE_POINTS'});
  yield put({type:'REARRANGE_PIECES_DONE'});

  yield takeEvery('PLAY_CARD_FROM_HAND', runTheCard);
  yield takeEvery('MOVE_NORTH', runTheCard);
  yield takeEvery('MOVE_SOUTH', runTheCard);
  yield takeEvery('BURN_THE_MOVE', runTheCard);

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
