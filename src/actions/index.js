import debug from '../include/debug'

export const addPiece = (piece) => ({
  type: 'ADD_PIECE',
  piece: piece
})

export const activatePiece = (piece) => ({
  type: piece.onActivate,
  piece: piece
})
