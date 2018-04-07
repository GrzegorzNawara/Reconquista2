import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
//import loadDataSaga from './sagas'
import { addPiece } from './actions'
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
    pieces: []
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
//store.dispatch(addPiece({piece_id:'arrow-s', onActivate:'MOVE_SOUTH', user_id:'user123', image:'./images/iso-arrow-s.png', pos:{x:3, y:1+0.6}}));
//store.dispatch(addPiece({piece_id:'arrow-n', onActivate:'MOVE_NORTH', user_id:'user123', image:'./images/iso-arrow-n.png', pos:{x:3, y:1-0.75}}));

store.dispatch(addPiece({piece_id:'enemy1', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:1}}));
store.dispatch(addPiece({piece_id:'enemy2', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:12, y:3}}));
store.dispatch(addPiece({piece_id:'enemy3', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-enemy.png', pos:{x:10, y:3}}));
store.dispatch(addPiece({piece_id:'marker1', onActivate:'SHOW_INFO', user_id:'system', image:'./images/iso-marker.png', pos:{x:10, y:3}}));
//store.dispatch(addPiece({piece_id:'enemy3', user_id:'system', image:'./images/iso-enemy.png', pos:{x:11.37, y:2.78}}));

/*
store.dispatch(addAttendee({id:'user123', name:'Ania #123'}));
store.dispatch(addAttendee({id:'user665', name:'Kasia #443'}));
store.dispatch(addAttendee({id:'user988', name:'Tomek #556'}));
store.dispatch(addAttendee({id:'user922', name:'Staś #522'}));
store.dispatch(addAttendee({id:'user023', name:'Karol #256'}));

store.dispatch(addSkill({
  area: 'Współpraca',
  id: 'analiza-sytuacji',
  name: 'Analiza sytuacji',
  level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
  level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
  level2: 'Warto stonować ten obszar. Analiza sytuacji'
}));

store.dispatch(addSkill({
  area: 'Współpraca',
  id: 'big-picture',
  name: 'Big Picture',
  level0: 'Warto rozwinąć ten obszar. Big Picture',
  level1: 'Dobrze rozwinięta umiejętność. Big Picture',
  level2: 'Warto stonować ten obszar. Big Picture'
}));

store.dispatch(addSkill({
  area: 'Przywództwo',
  id: 'troska',
  name: 'Troska o innych',
  level0: 'Warto rozwinąć ten obszar. Troska',
  level1: 'Dobrze rozwinięta umiejętność. Troska',
  level2: 'Warto stonować ten obszar. Troska'
}));

store.dispatch(addFeedback({attendee_id:'user665', skill_id:'analiza-sytuacji', level:1}));
store.dispatch(addFeedback({attendee_id:'user023', skill_id:'big-picture', level:1}));
*/
