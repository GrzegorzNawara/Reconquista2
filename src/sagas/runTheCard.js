import { put, select } from 'redux-saga/effects'
//import debug from '../include/debug'

export default function* runTheCard() {
  const theCard = yield select((state) => state.mymap.cards[state.mymap.actual_card_index]);

  yield put({type: theCard.card_type, card: theCard});
}
