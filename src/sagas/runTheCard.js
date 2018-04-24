import { delay } from 'redux-saga'
import { put, fork, select } from 'redux-saga/effects'
import sendMsg from './sendMsg'
import debug from '../include/debug'

export default function* runTheCard(action) {
  const theCard = yield select((state) => state.mymap.cards[state.mymap.actual_card_index]);

  debug(theCard.card_type,'MARKER')
  debug(action,'MARKER2')
  
  if(action.type==='MOVE_NORTH' || action.type==='MOVE_SOUTH') {
    yield fork(sendMsg,action);
    yield put({type:'REARRANGE_PIECES'});
    yield put({type:'CALCULATE_POINTS'});
    yield delay(800);
    yield put({type: 'SHOW_NEXT_CARD'});
  }

  if(action.type==='BURN_THE_MOVE') {
    yield put({type:'SHOW_NEXT_CARD'});
    yield put({type:'CALCULATE_POINTS'});
  }

  if(action.type==='SHOW_NEXT_CARD') {
    yield fork(sendMsg,action);
    yield put({type: theCard.card_type, card: theCard});
  }
}
