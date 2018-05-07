import { put } from 'redux-saga/effects'
import { addCard, addCard2Hand } from '../actions'
import * as CARDS from '../include/cardsDefinitions'
//import debug from '../include/debug'


export default function* addMyCards({scenario, my_piece_id}) {

  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMESTART_CARD}));

  for(let ii=0; ii<scenario[my_piece_id+'-cards'].length; ii++){
    let tmp_piece_id=scenario[my_piece_id+'-cards'][ii];
    yield put(addCard({piece_id:tmp_piece_id, ...CARDS.findHeaderCardById(tmp_piece_id), ...CARDS.findShowCardById(tmp_piece_id)}));
    yield put(addCard({piece_id:tmp_piece_id, ...CARDS.findExecCardById(tmp_piece_id)}));

    if(ii>0 && ii<4)
      yield put(addCard2Hand({piece_id:tmp_piece_id, index:(2*ii+1), ...CARDS.findHeaderCardById(tmp_piece_id), ...CARDS.findShowCardById(tmp_piece_id)}));
  }

  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));
  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));
}
