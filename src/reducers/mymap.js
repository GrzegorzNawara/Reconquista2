import debug from '../include/debug'

const rearrangePieces = (pieces=[],choosen_piece_index=-1,action_type) => {
  let new_pieces = pieces;
  let diff_y=0;

  if(action_type==='MOVE_NORTH') diff_y=-1;
  if(action_type==='MOVE_SOUTH') diff_y=+1;

  new_pieces[choosen_piece_index].pos.y+=diff_y;
  if(new_pieces[choosen_piece_index].pos.y<0){
    new_pieces[choosen_piece_index].pos.y=5;
  }
  if(new_pieces[choosen_piece_index].pos.y>5){
    new_pieces[choosen_piece_index].pos.y=0;
  }

  //fix the rows to the left and right
  let first_empty_x_on_the_left=0;
  let first_empty_x_on_the_choosen=0;
  let first_empty_x_on_the_right=0;
  for(let ii=0;ii<new_pieces.length;ii++){
    if(new_pieces[ii].can_move===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y-1){
      new_pieces[ii].pos.x=first_empty_x_on_the_left;
      first_empty_x_on_the_left++;
    }
    if(new_pieces[ii].can_move===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y){
      new_pieces[ii].pos.x=first_empty_x_on_the_choosen;
      first_empty_x_on_the_choosen++;
    }
    if(new_pieces[ii].can_move===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y+1){
      new_pieces[ii].pos.x=first_empty_x_on_the_right;
      first_empty_x_on_the_right++;
    }
  }

  return new_pieces;
}

const mymap = (state = {}, action) => {

  switch (action.type) {
    case 'MOVE_NORTH':
    case 'MOVE_SOUTH':
    case 'RUN_NEXT_CARD':
      const pieces_rearranged=rearrangePieces(state.pieces,state.choosen_piece_index,action.type);
      const next_card_index=(state.actual_card_index<state.cards.length-1)
        ?state.actual_card_index+1
        :state.actual_card_index;
      const actual_card=state.cards[next_card_index];
      const actual_card_piece_index=pieces_rearranged.filter(piece => piece.piece_id===actual_card.piece_id)[0].index;
      const actual_card_piece=pieces_rearranged[actual_card_piece_index];
      return {
        ...state,
        pieces: pieces_rearranged,
        actual_card_index: next_card_index,
        center: actual_card_piece.pos,
        choosen_piece_index: actual_card_piece.index
      }
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.card,
            index: state.cards.length
          }
        ]
      }
    case 'ADD_PIECE':
      return {
        ...state,
        center: action.piece.pos,
        choosen_piece_index: state.pieces.length,
        pieces: [
          ...state.pieces,
          {
            ...action.piece,
            index: state.pieces.length
          }
        ]
      }
    case 'SHOW_INFO':
      return {
        ...state,
        center: action.piece.pos,
        choosen_piece_index: action.piece.index,
      }
    case 'SET_MAP_CENTER':
      return {
        ...state,
        center: action.center
      }
    default:
      return state
  }
}

export default mymap
