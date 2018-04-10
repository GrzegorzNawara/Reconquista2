const mycards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MYCARD':
      return [
        ...state,
        {
          ...action.mycard
        }
      ]
    default:
      return state
  }
}

export default mycards
