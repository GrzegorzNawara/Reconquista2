import { calculatePoints, rearrangePieces } from '../include/gameFunctions'
import * as CARDS from '../include/cardsDefinitions'
import debug from '../include/debug'

const mymap = (state = {}, action) => {

  switch (action.type) {
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
    case 'MOVE_NORTH':
      return {
        ...state,
        ...state.pieces.map(piece => (piece.piece_id===action.piece.piece_id)?
        {...piece, pos:{x:piece.pos.x,y:piece.pos.y++%6}}
        :piece
      )}
    case 'MOVE_SOUTH':
      return {
        ...state,
        ...state.pieces.map(piece => (piece.piece_id===action.piece.piece_id)?
        {...piece, pos:{x:piece.pos.x,y:piece.pos.y++%6}}
        :piece
      )}
    case 'REARRANGE_PIECES':
      return {
        ...state,
        ...rearrangePieces(state.pieces)
      }
    case 'CALCULATE_POINTS':
      return {
        ...state,
        score: {
          ...state.score,
          ...calculatePoints(state.my_piece_id, state.pieces),
        }
      }
    case 'BURN_THE_MOVE':
      return {
        ...state,
        score: { ...state.score, burnt_points: state.score.burnt_points++ }
      }
    case 'SHOW_NEXT_CARD':
      return {
        ...state,
        actual_card_index:
          (state.actual_card_index<state.cards.length-1)
            ?state.actual_card_index+=1
            :state.actual_card_index
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
    case 'SHOW_INFO':
      return {
        ...state,
        show_info_piece: action.piece,
      }
    case 'SET_MAP_CENTER':
      return {
        ...state,
        center: action.center
      }
    default:
      return state
  }
}

export default mymap
