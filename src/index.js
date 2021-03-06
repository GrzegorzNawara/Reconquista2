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
    scenario: {
      title:'...',
      subtitle:[''],
      burnt_points_weight:1,
      war_points_weight:1,
      happy_points_weight:1
    },
    scenario_choosen: 0,
    scenario_id: -1,
    show_game_info: 0,

    show_loading_screen: 1,
    start_time: Date.now(),
    time_used: 0,

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
    cards: [],
    hand: [],
    hand_choosen_card: -1,
    next_available_card_index: 0,
    total_number_of_cards_played: 0,
    total_number_of_cards_available: 0
  }
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
