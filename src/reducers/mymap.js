import { calculatePoints, rearrangePieces } from '../include/gameFunctions'

const mymap = (state = {}, action) => {

  switch (action.type) {
    case 'SET_MY_PIECE_ID':
      return {
        ...state,
        my_piece_id: action.my_piece_id
      }
    case 'RUN_BURN_CARD':
    case 'MOVE_NORTH':
    case 'MOVE_SOUTH':
    case 'RUN_NEXT_CARD':
      const pieces_rearranged=rearrangePieces(state.pieces,state.choosen_piece_index,action.type);
      const next_card_index=(state.actual_card_index<state.cards.length-1)
        ?state.actual_card_index+1
        :state.actual_card_index;
      const actual_card=state.cards[next_card_index];
      const actual_card_piece_index=pieces_rearranged.filter(piece => piece.piece_id===actual_card.piece_id)[0].index;
      const actual_card_piece=pieces_rearranged[actual_card_piece_index];
      return {
        ...state,
        pieces: pieces_rearranged,
        actual_card_index: next_card_index,
        center: actual_card_piece.pos,
        choosen_piece_index: actual_card_piece.index,
        score: {...calculatePoints(state.my_piece_id, state.pieces), burnt_points:(action.type==='RUN_BURN_CARD')?state.score.burnt_points+1:state.score.burnt_points}
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
        center: action.piece.pos,
        choosen_piece_index: state.pieces.length,
        pieces: [
          ...state.pieces,
          {
            ...action.piece,
            old_pos: action.piece.pos,
            index: state.pieces.length
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
