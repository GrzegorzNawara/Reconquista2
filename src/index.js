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
//import debug from './include/debug'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  // data
  // array of objects with piece_id, user_id, pic, x, y
  rq_pieces: [],
  // array of objects with piece_id
  rq_cards: []
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

store.dispatch(addPiece({piece_id:'king1', user_id:'user123', image:'./images/iso-big-y.png', x:100, y:100}));
store.dispatch(addPiece({piece_id:'knight1', user_id:'user123', image:'./images/iso-small-y.png', x:150, y:100}));

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
