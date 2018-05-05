import { calculatePoints, rearrangePieces } from '../include/gameFunctions'
import * as CARDS from '../include/cardsDefinitions'
//import debug from '../include/debug'

const mymap = (state = {}, action) => {
  //debug(action,'ACTION');

  switch (action.type) {
    case 'INCREMENT_MSG_ID':
      return {
        ...state,
        last_msg_id: state.last_msg_id+1,
        last_nonempty_update: Date.now()
      }
    case 'SET_MY_INDEX':
      return {
        ...state,
        my_index: action.my_index
      }
    case 'CHOOSE_SCENARIO':
      return {
        ...state,
        scenario_choosen: 1,
        scenario_id: action.scenario_id
      }
    case 'SET_SCENARIO':
      return {
        ...state,
        scenario: action.scenario,
        scenario_choosen: 1
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
        time_used: state.time_used+15,
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
        time_used: state.time_used+15,
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
    case 'REARRANGE_PIECES_DONE':
      return {
        ...state,
        pieces: state.pieces.map( piece => ({
            ...piece,
            old_pos: { x: piece.pos.x, y: piece.pos.y }
      }))}
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
          (state.cards.length>0 && state.actual_card_index<state.cards.length-1)
            ?state.actual_card_index+=1
            :state.actual_card_index
      }
    case 'UPDATE_SHOW_NEXT_CARD':
      return {
        ...state,
        actual_card_index:
          (state.cards.length>0 && state.actual_card_index<state.cards.length-1)
            ?state.actual_card_index+=1
            :state.actual_card_index
      }
    case 'SHOW_INFO_CARD':
    case 'SHOW_PIECE_CARD':
      return {
        ...state,
        action_buttons_visible: 0,
        choosen_piece_index: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].index,
        center: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].pos
      }
    case 'MOVE_PIECE_CARD':
      return {
        ...state,
        action_buttons_visible: 1,
        choosen_piece_index: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].index,
        center: state.pieces.filter((piece) => piece.piece_id===action.card.piece_id)[0].pos
      }
    case 'RECENTER':
      return {
        ...state,
        center: (state.choosen_piece_index>=0)?state.pieces[state.choosen_piece_index].pos:{x:0,y:0}
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
            ...CARDS.findHeaderCardById(action.piece.piece_id)
          }
        ]
      }
    default:
      return state
  }
}

export default mymap
