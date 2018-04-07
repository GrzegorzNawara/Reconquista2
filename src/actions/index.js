import debug from '../include/debug'

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
