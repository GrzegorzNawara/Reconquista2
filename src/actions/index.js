//import debug from '../include/debug'

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

export const runNextCard = () => ({
  type: 'RUN_NEXT_CARD'
})
