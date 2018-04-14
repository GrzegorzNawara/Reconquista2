import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
//import loadDataSaga from './sagas'
import { addPiece, addCard, runNextCard } from './actions'
import * as CARDS from './include/cardsDefinitions'
//import debug from './include/debug'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  // data
  // map position
  mymap: {
    center: {x:0, y:0},
    choosen_piece_index: -1,
    pieces: [],

    show_info_piece: {},

    actual_card_index: -1,
    cards: []
  },

  // array of objects with piece_id
  mycards: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

//sagaMiddleware.run(loadDataSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
/*
store.dispatch(addPiece({piece_id:'king1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-y.png', pos:{x:0, y:0}}));
store.dispatch(addPiece({piece_id:'knight1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-y.png', pos:{x:1, y:0}}));
store.dispatch(addPiece({piece_id:'knight2', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-y.png', pos:{x:2, y:0}}));

store.dispatch(addPiece({piece_id:'rebel1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-k.png', pos:{x:3, y:0}}));
store.dispatch(addPiece({piece_id:'farmer1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-k.png', pos:{x:4, y:0}}));
store.dispatch(addPiece({piece_id:'farmer2', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-k.png', pos:{x:5, y:0}}));
store.dispatch(addPiece({piece_id:'farmer3', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-k.png', pos:{x:6, y:0}}));
store.dispatch(addPiece({piece_id:'farmer4', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-k.png', pos:{x:7, y:0}}));
store.dispatch(addPiece({piece_id:'farmer5', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-k.png', pos:{x:8, y:0}}));

store.dispatch(addPiece({piece_id:'levy1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-r.png', pos:{x:0, y:1}}));
store.dispatch(addPiece({piece_id:'merchant1', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-r.png', pos:{x:1, y:1}}));
store.dispatch(addPiece({piece_id:'merchant2', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-r.png', pos:{x:2, y:1}}));
store.dispatch(addPiece({piece_id:'merchant3', can_move:1, onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-r.png', pos:{x:3, y:1}}));
*/
//store.dispatch(addPiece({piece_id:'house1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-house.png', pos:{x:11, y:0}}));

/*
store.dispatch(addPiece({piece_id:'enemy1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:0}}));
store.dispatch(addPiece({piece_id:'enemy2', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14-0.50, y:0-0.18}}));
store.dispatch(addPiece({piece_id:'enemy3', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14-1.10, y:0-0.38}}));
store.dispatch(addPiece({piece_id:'enemy4', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:1}}));
store.dispatch(addPiece({piece_id:'enemy5', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:1}}));
store.dispatch(addPiece({piece_id:'enemy6', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:2}}));
store.dispatch(addPiece({piece_id:'enemy7', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:3}}));
store.dispatch(addPiece({piece_id:'enemy8', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:3}}));
store.dispatch(addPiece({piece_id:'marker1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-marker.png', pos:{x:12, y:3}}));
*/


// Card generator
const scenario={
  my_cards:4,
  usr_cards:6,
  npc_cards:18,
  usr_pieces: ['knight1','knight2','rebel1'],
  npc_pieces: ['levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'],
  enemy_pieces: ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
  house_pieces: ['house1','house2','house3']
}
const my_piece_id='king1';

const scenarioGenerator = (my_piece_id, scenario) => {
  let deck_size=scenario.my_cards+scenario.usr_cards+scenario.npc_cards;
  let deck_composition={my:0,usr:0,npc:0};
  let random_picker=0;
  let tmp_piece_id='';
  let pieces_row_max=[0,0,0,0,0,0];
  let enemy_row_stack=[0,0,0,0,0,0];
  let tmp_row=0;

  // ADD HOUSE PIECES
  for(let ii=0; ii<scenario.house_pieces.length; ii++){
    tmp_piece_id=scenario.house_pieces[ii];
    tmp_row=Math.floor(Math.random()*6);
    store.dispatch(
      addPiece({
        piece_id:tmp_piece_id,
        can_move:0,
        rearrange:1,
        onActivate:'SHOW_INFO',
        user_id:'user123',
        pos:{x:pieces_row_max[tmp_row], y:tmp_row},
        image:'./images/iso-house.png'
      }));
      pieces_row_max[tmp_row]++;
  }

  // ADD USR PIECES
  for(let ii=0; ii<scenario.usr_pieces.length; ii++){
    tmp_piece_id=scenario.usr_pieces[ii];
    tmp_row=Math.floor(Math.random()*6);
    store.dispatch(
      addPiece({
        piece_id:tmp_piece_id,
        can_move:1,
        rearrange:1,
        onActivate:'SHOW_INFO',
        user_id:'user123',
        pos:{x:pieces_row_max[tmp_row], y:tmp_row},
        ...CARDS.findCardById(tmp_piece_id)
      }));
      pieces_row_max[tmp_row]++;
  }

  // ADD NPC PIECES
  for(let ii=0; ii<scenario.npc_pieces.length; ii++){
    tmp_piece_id=scenario.npc_pieces[ii];
    tmp_row=Math.floor(Math.random()*6);
    store.dispatch(
      addPiece({
        piece_id:tmp_piece_id,
        can_move:1,
        rearrange:1,
        onActivate:'SHOW_INFO',
        user_id:'user123',
        pos:{x:pieces_row_max[tmp_row], y:tmp_row},
        ...CARDS.findCardById(tmp_piece_id)
      }));
      pieces_row_max[tmp_row]++;
  }

  // ADD ENEMY PIECES
  for(let ii=0; ii<scenario.enemy_pieces.length; ii++){
    tmp_piece_id=scenario.enemy_pieces[ii];
    tmp_row=Math.floor(Math.random()*6);
    store.dispatch(
      addPiece({
        piece_id:tmp_piece_id,
        can_move:0,
        rearrange:0,
        onActivate:'SHOW_INFO',
        user_id:'user123',
        pos:{x:15-0.5*enemy_row_stack[tmp_row], y:tmp_row-0.18*enemy_row_stack[tmp_row]},
        image:'./images/iso-enemy.png'
      }));
      enemy_row_stack[tmp_row]++;
  }

  // ADD MY PIECE
  tmp_piece_id=my_piece_id;
  tmp_row=Math.floor(Math.random()*6);
  store.dispatch(
    addPiece({
      piece_id:tmp_piece_id,
      can_move:1,
      rearrange:1,
      onActivate:'SHOW_INFO',
      user_id:'user123',
      pos:{x:pieces_row_max[tmp_row], y:tmp_row},
      ...CARDS.findCardById(tmp_piece_id)
  }));
  pieces_row_max[tmp_row]++;




  // ADD ENEMY CARDS
  store.dispatch(addCard({piece_id:my_piece_id, ...CARDS.ENEMY_CARD, ...CARDS.SHOW_ENEMY_CARD}));
  for(let ii=0; ii<scenario.enemy_pieces.length; ii++){
    tmp_piece_id=scenario.enemy_pieces[ii];
    store.dispatch(addCard({piece_id:tmp_piece_id, ...CARDS.EXEC_ENEMY_CARD}));
  }

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
      store.dispatch(addCard({piece_id:tmp_piece_id, ...CARDS.findCardById(tmp_piece_id), ...CARDS.SHOW_MOVE_CARD}));
      store.dispatch(addCard({piece_id:tmp_piece_id, ...CARDS.EXEC_MOVE_CARD}));
    }
  }
}

store.dispatch(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMESTART_CARD}));
scenarioGenerator(my_piece_id, scenario);
store.dispatch(addCard({piece_id:my_piece_id, ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));

store.dispatch(runNextCard({}));
