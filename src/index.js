import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
//import loadDataSaga from './sagas'
import { addPiece, addCard, runNextCard } from './actions'
//import { addSkill } from './actions'
//import { addFeedback } from './actions'
import debug from './include/debug'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  // data
  // map position
  mymap: {
    center: {x:0, y:0},
    choosen_piece_index: -1,
    pieces: [],

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

store.dispatch(addPiece({piece_id:'king1', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-k.png', pos:{x:0, y:0}}));
store.dispatch(addPiece({piece_id:'king2', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-r.png', pos:{x:1, y:0}}));
store.dispatch(addPiece({piece_id:'king3', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-y.png', pos:{x:2, y:0}}));
store.dispatch(addPiece({piece_id:'king4', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-r.png', pos:{x:3, y:0}}));

store.dispatch(addPiece({piece_id:'king5', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-big-y.png', pos:{x:0, y:1}}));
store.dispatch(addPiece({piece_id:'king6', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-r.png', pos:{x:1, y:1}}));
store.dispatch(addPiece({piece_id:'king7', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-y.png', pos:{x:2, y:1}}));
store.dispatch(addPiece({piece_id:'king8', onActivate:'SHOW_INFO', user_id:'user123', image:'./images/iso-small-y.png', pos:{x:3, y:1}}));

store.dispatch(addPiece({piece_id:'enemy1', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:1}}));
store.dispatch(addPiece({piece_id:'enemy2', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:3}}));
store.dispatch(addPiece({piece_id:'enemy3', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:10, y:3}}));
store.dispatch(addPiece({piece_id:'marker1', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-marker.png', pos:{x:10, y:3}}));

store.dispatch(addCard({piece_id:'king8', card_type:'MOVE_PIECE'}));
store.dispatch(addCard({piece_id:'king1', card_type:'MOVE_PIECE'}));
store.dispatch(addCard({piece_id:'king4', card_type:'MOVE_PIECE'}));

store.dispatch(runNextCard({}));
store.dispatch(runNextCard({}));
