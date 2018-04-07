import debug from '../include/debug'

const mymap = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PIECE':
      return {
        center: state.center,
        pieces: [
          ...state.pieces,
          action.piece
        ]
      }
    case 'SHOW_INFO':
      return {
        center: action.piece.pos,
        pieces: state.pieces
      }
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
