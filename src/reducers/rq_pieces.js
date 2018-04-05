const rq_pieces = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIECE':
      return [
        ...state,
        {
          piece_id: action.piece_id,
          user_id: action.user_id,
          image: action.image,
          x: action.x,
          y: action.y
        }
      ]
    default:
      return state
  }
}

export default rq_pieces
