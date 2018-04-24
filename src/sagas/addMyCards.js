import { put } from 'redux-saga/effects'
import { addCard } from '../actions'
import * as CARDS from '../include/cardsDefinitions'
import debug from '../include/debug'


export default function* addMyCards({scenario, my_piece_id}) {

  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMESTART_CARD}));

  debug(scenario,'SCENARIO')
  debug(scenario[my_piece_id+'-cards'],'CARDS')
  for(let ii=0; ii<scenario[my_piece_id+'-cards'].length; ii++){
    let tmp_piece_id=scenario[my_piece_id+'-cards'][ii];
    yield put(addCard({piece_id:tmp_piece_id, ...CARDS.findHeaderCardById(tmp_piece_id), ...CARDS.findShowCardById(tmp_piece_id)}));
    yield put(addCard({piece_id:tmp_piece_id, ...CARDS.findExecCardById(tmp_piece_id)}));
  }

/*
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
*/
  yield put(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));
}
