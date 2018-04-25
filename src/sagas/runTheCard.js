import { delay } from 'redux-saga'
import { put, fork, select } from 'redux-saga/effects'
import sendMsg from './sendMsg'
//import debug from '../include/debug'

export default function* runTheCard(action) {
  const theCard = yield select((state) => state.mymap.cards[state.mymap.actual_card_index]);

  if(action.type==='MOVE_NORTH' || action.type==='MOVE_SOUTH') {
    yield fork(sendMsg,action);
    yield put({type:'REARRANGE_PIECES'});
    yield put({type:'CALCULATE_POINTS'});
    yield delay(1000);
    yield put({type: 'SHOW_NEXT_CARD'});
    yield put({type:'REARRANGE_PIECES_DONE'});
  }

  if(action.type==='BURN_THE_MOVE') {
    yield put({type:'SHOW_NEXT_CARD'});
    yield put({type:'CALCULATE_POINTS'});
  }

  if(action.type==='SHOW_NEXT_CARD') {
    yield fork(sendMsg,action);
    yield put({type:'REARRANGE_PIECES_DONE'});
    yield put({type: theCard.card_type, card: theCard});
  }

  if(action.type==='UPDATE_SHOW_NEXT_CARD') {
    yield put({type: theCard.card_type, card: theCard});
  }
}
