import { combineReducers } from 'redux'
import rq_pieces from './rq_pieces'
import rq_cards from './rq_cards'

const myApp = combineReducers({
  rq_pieces: rq_pieces,
  rq_cards: rq_cards
})

export default myApp
