import { calculatePoints, rearrangePieces } from '../include/gameFunctions'
import * as CARDS from '../include/cardsDefinitions'
//import debug from '../include/debug'

const mymap = (state = {}, action) => {

  switch (action.type) {
    case 'INCREMENT_MSG_ID':
      return {
        ...state,
        last_msg_id: state.last_msg_id+1,
        last_nonempty_update: Date.now()
      }
    case 'SET_SCENARIO':
      return {
        ...state,
        scenario: action.scenario
      }
    case 'SET_MY_PIECE_ID':
      return {
        ...state,
        my_piece_id: action.my_piece_id
      }
    case 'UPDATE_MOVE_NORTH':
      return {
        ...state,
        pieces: state.pieces.map( piece => (
          (piece.piece_id===action.piece.piece_id)?
          {
            ...piece,
            pos: {x: piece.pos.x, y:(piece.pos.y+5)%6},
            old_pos: { x: piece.pos.x, y: piece.pos.y }
          }:piece
      ))}
    case 'UPDATE_MOVE_SOUTH':
      return {
        ...state,
        pieces: state.pieces.map( piece => (
          (piece.piece_id===action.piece.piece_id)?
          {
            ...piece,
            pos: {x: piece.pos.x, y:(piece.pos.y+7)%6},
            old_pos: { x: piece.pos.x, y: piece.pos.y }
          }:piece
      ))}
    case 'MOVE_NORTH':
      return {
        ...state,
        action_buttons_visible: 0,
        pieces: state.pieces.map( piece => (
          (piece.piece_id===action.piece.piece_id)?
          {
            ...piece,
            pos: {x: piece.pos.x, y:(piece.pos.y+5)%6},
            old_pos: { x: piece.pos.x, y: piece.pos.y }
          }:piece
      ))}
    case 'MOVE_SOUTH':
      return {
        ...state,
        action_buttons_visible: 0,
        pieces: state.pieces.map( piece => (
          (piece.piece_id===action.piece.piece_id)?
          {
            ...piece,
            pos: {x: piece.pos.x, y:(piece.pos.y+7)%6},
            old_pos: { x: piece.pos.x, y: piece.pos.y }
          }:piece
      ))}
    case 'BURN_THE_MOVE':
      return {
        ...state,
        action_buttons_visible: 0,
        score: { ...state.score, burnt_points: state.score.burnt_points+1 }
      }
    case 'REARRANGE_PIECES':
      return {
        ...state,
        pieces: rearrangePieces(state.pieces)
      }
    case 'CALCULATE_POINTS':
      return {
        ...state,
        score: {
          ...state.score,
          ...calculatePoints(state.my_piece_id, state.pieces),
        }
      }
    case 'SHOW_NEXT_CARD':
      return {
        ...state,
        actual_card_index:
          (state.actual_card_index<state.cards.length-1)
            ?state.actual_card_index+=1
            :state.actual_card_index
      }
    case 'SHOW_INFO_CARD':
    case 'SHOW_PIECE_CARD':
      return {
        ...state,
        center: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].pos
      }
    case 'MOVE_PIECE_CARD':
      return {
        ...state,
        action_buttons_visible: 1,
        choosen_piece_index: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].index,
        center: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].pos
      }
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.card,
            index: state.cards.length
          }
        ]
      }
    case 'ADD_PIECE':
      return {
        ...state,
        pieces: [
          ...state.pieces,
          { ...action.piece,
            old_pos: action.piece.pos,
            index: state.pieces.length,
            ...CARDS.findCardById(action.piece.piece_id)
          }
        ]
      }
    default:
      return state
  }
}

export default mymap
