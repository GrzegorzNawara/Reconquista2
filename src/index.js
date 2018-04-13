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

store.dispatch(addPiece({piece_id:'house1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-house.png', pos:{x:11, y:0}}));

store.dispatch(addPiece({piece_id:'enemy1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:0}}));
store.dispatch(addPiece({piece_id:'enemy2', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14-0.50, y:0-0.18}}));
store.dispatch(addPiece({piece_id:'enemy3', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14-1.10, y:0-0.38}}));
store.dispatch(addPiece({piece_id:'enemy4', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:1}}));
store.dispatch(addPiece({piece_id:'enemy5', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:1}}));
store.dispatch(addPiece({piece_id:'enemy6', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:2}}));
store.dispatch(addPiece({piece_id:'enemy7', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:3}}));
store.dispatch(addPiece({piece_id:'enemy8', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:14, y:3}}));
store.dispatch(addPiece({piece_id:'marker1', can_move:0, onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-marker.png', pos:{x:12, y:3}}));




store.dispatch(addCard({piece_id:'enemy1', ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMESTART_CARD}));

store.dispatch(addCard({piece_id:'enemy1', ...CARDS.ENEMY_CARD, ...CARDS.SHOW_ENEMY_CARD}));
store.dispatch(addCard({piece_id:'enemy1', ...CARDS.EXEC_ENEMY_CARD}));
store.dispatch(addCard({piece_id:'enemy2', ...CARDS.EXEC_ENEMY_CARD}));

store.dispatch(addCard({piece_id:'king1', ...CARDS.KING_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'king1', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'levy1', ...CARDS.LEVY_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'levy1', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'rebel1', ...CARDS.REBEL_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'rebel1', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'knight1', ...CARDS.KNIGHT_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'knight1', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'farmer1', ...CARDS.FARMER_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'farmer2', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'merchant1', ...CARDS.MERCHANT_CARD, ...CARDS.SHOW_MOVE_CARD}));
store.dispatch(addCard({piece_id:'merchant1', ...CARDS.EXEC_MOVE_CARD}));

store.dispatch(addCard({piece_id:'enemy1', ...CARDS.EVENT_CARD, ...CARDS.SHOW_GAMEOVER_CARD}));

store.dispatch(runNextCard({}));
