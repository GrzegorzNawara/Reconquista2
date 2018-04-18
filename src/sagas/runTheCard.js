import { put, select } from 'redux-saga/effects'
//import debug from '../include/debug'

export default function* runTheCard() {
  const getTheCard = (state) => state.mymap.cards[state.mymap.actual_card_index];
  const theCard = yield select(getTheCard);

  yield put({type: theCard.card_type, card: theCard});
}
