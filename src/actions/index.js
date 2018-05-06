//import debug from '../include/debug'
export const setMyPieceId = ({my_piece_id}) => ({
  type: 'SET_MY_PIECE_ID',
  my_piece_id: my_piece_id
})

export const setScenario = (scenario) => ({
  type: 'SET_SCENARIO',
  scenario: scenario
})

export const chooseScenario = (scenario_desc) => ({
  type: 'CHOOSE_SCENARIO',
  scenario_id: scenario_desc.id
})

export const addPiece = (piece) => ({
  type: 'ADD_PIECE',
  piece: piece
})

export const moveNorth = (piece) => ({
  type: 'MOVE_NORTH',
  piece: piece
})

export const moveSouth = (piece) => ({
  type: 'MOVE_SOUTH',
  piece: piece
})

export const activatePiece = (piece) => ({
  type: piece.onActivate,
  piece: piece
})

export const addCard = (card) => ({
  type: 'ADD_CARD',
  card: card
})

export const addCard2Hand = (card) => ({
  type: 'ADD_CARD_2_HAND',
  card: card
})

export const showNextCard = () => ({
  type: 'SHOW_NEXT_CARD'
})

export const burnTheCard = () => ({
  type: 'BURN_THE_MOVE'
})

export const chooseCardFromHand = (card) => ({
  type: 'CHOOSE_CARD_FROM_HAND',
  card: card
})
