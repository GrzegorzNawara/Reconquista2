import debug from '../include/debug'

const mymap = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PIECE':
      return {
        center: state.center,
        pieces: [
          ...state.pieces,
          {
            piece_id: action.piece_id,
            user_id: action.user_id,
            image: action.image,
            pos: action.pos
          }
        ]
      }
    case 'SET_MAP_CENTER':
      return {
        ceneter: action.center,
        ...state.pieces
      }
    default:
      return state
  }
}

export default mymap
