import { delay } from 'redux-saga'
import { put, call, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { setScenario, addPiece, addCard, runNextCard, setMyPieceId } from '../actions'
import * as CARDS from '../include/cardsDefinitions'
import getUrlParam from '../include/getUrlParam'
import debug from '../include/debug'

function* sendMsg(action) {
  const response1 = yield call(apiFetchData,
      "http://abcportal.eu/growbook-test/games/reconquista2/api-send-msg.php"
      +"?game_id="+getUrlParam('game_id')
      +"&user_id="+getUrlParam('user_id')
      +"&action="+JSON.stringify(action)
    )
  if (debug(response1,'RESPONSE').error) {
    return yield put({type: 'SEND_MSG_ERROR', response1})
  }
}

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

export default function* loadDataSaga() {

  let scenario=[];
  let my_piece_id='';
  // my_index
  const response2 = yield call(apiFetchData,
    'http://abcportal.eu/growbook-test/games/reconquista2/api-get-my-index.php?game_id='+getUrlParam('game_id')+'&user_id='+getUrlParam('user_id'))
  if(response2.error){
    return yield put({type:'FETCH_MSG_ERROR',response1})
  }
  const my_index = JSON.parse(response2);

  // scenario, pieces, cards
  const response1 = yield call(apiFetchData,
    'http://abcportal.eu/growbook-test/games/reconquista2/api-get-msg.php?game_id=111-222-333')
  if(response1.error){
    return yield put({type:'FETCH_MSG_ERROR',response1})
  }
  const msg = response1.split("\n").filter((str) => str!=='').map((str) => JSON.parse(str));
  for(let ii=0; ii<msg.length; ii++){

    if(msg[ii].type==='SET_SCENARIO'){
      scenario=msg[ii].scenario;
      my_piece_id=scenario.usr_pieces[my_index%msg[ii].scenario.usr_pieces.length];
      yield put(setScenario(msg[ii].scenario));
      yield put(setMyPieceId({my_piece_id:my_piece_id}));
    }

    if(msg[ii].type==='ADD_PIECE')
      yield put(addPiece({
        ...msg[ii].piece,
        ...CARDS.findCardById(msg[ii].piece.piece_id)
      }));
  }


  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMESTART_CARD}));

  if(my_piece_id==='king1'){
    yield put(addCard({piece_id:'enemy1', ...CARDS.ENEMY_CARD, ...CARDS.SHOW_ENEMY_CARD}));
    yield put(addCard({piece_id:'enemy1', ...CARDS.EXEC_ENEMY_CARD}));
    yield put(addCard({piece_id:'enemy2', ...CARDS.EXEC_ENEMY_CARD}));
    yield put(addCard({piece_id:'enemy3', ...CARDS.EXEC_ENEMY_CARD}));
  }


  let deck_size=scenario.my_cards+scenario.usr_cards+scenario.npc_cards;
  let deck_composition={my:0,usr:0,npc:0};
  let random_picker=0;
  let tmp_piece_id='';

  // ADD MOVE CARDS
  for(let step=0; step<1000; step++){
    random_picker=Math.random();
    tmp_piece_id='';

    if(deck_composition.my<scenario.my_cards && random_picker<scenario.my_cards/deck_size){ //MY CARDS

      deck_composition.my++;
      tmp_piece_id=my_piece_id;
    }else if(deck_composition.usr<scenario.usr_cards && random_picker<(scenario.my_cards+scenario.usr_cards)/deck_size){ //USERS CARDS

      deck_composition.usr++;
      tmp_piece_id=scenario.usr_pieces[Math.floor(Math.random()*scenario.usr_pieces.length)];
    }else if(deck_composition.npc<scenario.npc_cards){ //NPC cards

      deck_composition.npc++;
      tmp_piece_id=scenario.npc_pieces[Math.floor(Math.random()*scenario.npc_pieces.length)];
    }

    if(tmp_piece_id!==''){
      yield put(addCard({piece_id:tmp_piece_id, ...CARDS.findCardById(tmp_piece_id), ...CARDS.SHOW_MOVE_CARD}));
      yield put(addCard({piece_id:tmp_piece_id, ...CARDS.EXEC_MOVE_CARD}));
    }
  }

  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));
  yield put(runNextCard({}));

  //yield takeEvery('MOVE_NORTH', sendMsg);
  //yield takeEvery('MOVE_SOUTH', sendMsg);


}
