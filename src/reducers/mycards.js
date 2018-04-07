const mycards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          card_id: action.card_id,
          user_id: action.user_id
        }
      ]
    default:
      return state
  }
}

export default mycards
