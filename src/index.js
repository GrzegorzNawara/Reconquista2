import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import mainSaga from './sagas'
//import debug from './include/debug'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  // data
  mymap: {
    scenario: {},
    scenario_choosen: 0,

    last_msg_id: -1,
    last_nonempty_update: 0,

    my_hash: Math.floor(Math.random()*10000000),
    my_index: -1,
    my_piece_id: '',

    center: {x:0, y:0},
    choosen_piece_index: -1,
    pieces: [],

    show_info_piece: {},
    score: {
      burnt_points:0,
      war_points:0,
      happy_points:0
    },

    action_buttons_visible: 0,
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

sagaMiddleware.run(mainSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
