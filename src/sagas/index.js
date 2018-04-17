import { put, call, take } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { addPiece, addCard, runNextCard, setMyPieceId } from '../actions'
import * as CARDS from '../include/cardsDefinitions'
import debug from '../include/debug'

export default function* loadDataSaga() {
  const response1 = yield call(apiFetchData,
    'http://abcportal.eu/growbook-test/games/reconquista2/api-get-msg.php?game_id=111-222-333')
  if(response1.error){
    return yield put({type:'FETCH_MSG_ERROR',response1})
  }
  const msg = response1.split("\n").filter((str) => str!=='').map((str) => JSON.parse(str));
  for(let ii=0; ii<msg.length; ii++){
    if(msg[ii].action==='addPiece')
      yield put(addPiece({
        ...msg[ii].piece,
        ...CARDS.findCardById(msg[ii].piece.piece_id)
      }));
  }

}
