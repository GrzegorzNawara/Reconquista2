import debug from '../include/debug'

const mymap = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PIECE':
      return {
        center: action.piece.pos,
        choosen_piece_index: state.pieces.length,
        pieces: [
          ...state.pieces,
          {
            ...action.piece,
            index: state.pieces.length
          }
        ]
      }
    case 'SHOW_INFO':
      return {
        center: action.piece.pos,
        choosen_piece_index: action.piece.index,
        pieces: state.pieces
      }
    case 'MOVE_NORTH':
      return {
        center: {x:action.piece.pos.x, y:action.piece.pos.y-1},
        choosen_piece_index: state.choosen_piece_index,
        pieces: state.pieces.map( (piece, ii) =>
            (ii===state.choosen_piece_index)
            ?{
              ...piece,
              pos:{x:piece.pos.x,y:piece.pos.y-1}
            }
            :piece
      )}
    case 'MOVE_SOUTH':
      return {
        center: {x:action.piece.pos.x, y:action.piece.pos.y+1},
        choosen_piece_index: state.choosen_piece_index,
        pieces: state.pieces.map( (piece, ii) =>
            (ii===state.choosen_piece_index)
            ?{
              ...piece,
              pos:{x:piece.pos.x,y:piece.pos.y+1}
            }
            :piece
      )}
    case 'SET_MAP_CENTER':
      return {
        center: action.center,
        ...state.pieces
      }
    default:
      return state
  }
}

export default mymap
