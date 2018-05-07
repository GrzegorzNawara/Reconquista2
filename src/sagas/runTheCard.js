import { delay } from 'redux-saga'
import { put, fork, select } from 'redux-saga/effects'
import sendMsg from './sendMsg'
//import debug from '../include/debug'

export default function* runTheCard(action) {
  const theCard = yield select((state) => state.mymap.cards[state.mymap.actual_card_index]);
  const delay_time = yield select((state) => Math.max(1000,((state.mymap.start_time+state.mymap.time_used*1000)-Date.now())));

  if(action.type==='MOVE_NORTH' || action.type==='MOVE_SOUTH') {
    yield fork(sendMsg,action);
    yield put({type:'REARRANGE_PIECES'});
    yield put({type:'CALCULATE_POINTS'});
    yield put({type: 'RECENTER'});
    yield delay(1000);
    yield put({type:'REARRANGE_PIECES_DONE'});
  }

  if(action.type==='PLAY_CARD_FROM_HAND' && theCard.card_type==='MOVE_PIECE_CARD') {
    yield fork(sendMsg,{type:'BURN_THE_MOVE'});
    yield put({type:'BURN_THE_MOVE'});
    yield put({type:'CALCULATE_POINTS'});
  }

  if(action.type==='PLAY_CARD_FROM_HAND') {
    yield fork(sendMsg,action);
    yield put({type:'REARRANGE_PIECES_DONE'});
    yield put({type: theCard.card_type, card: theCard});
    yield delay(delay_time);
    yield put({type:'ADD_CARD_2_HAND'});
  }

  if(action.type==='UPDATE_PLAY_CARD_FROM_HAND') {
    yield put({type: theCard.card_type, card: theCard});
    yield put({type:'ADD_CARD_2_HAND'});
  }
}
