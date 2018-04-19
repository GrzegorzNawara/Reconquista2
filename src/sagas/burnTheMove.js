import { put } from 'redux-saga/effects'
//import debug from '../include/debug'

export default function* burnTheMove() {
  yield put({type: 'SHOW_NEXT_CARD'});
  yield put({type:'CALCULATE_POINTS'});
}
