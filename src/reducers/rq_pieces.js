const rq_pieces = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          piece_id: action.piece_id,
          x: action.x,
          y: action.y
        }
      ]
    default:
      return state
  }
}

export default rq_pieces
