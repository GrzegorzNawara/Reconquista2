export const calculatePoints = (pieces=[]) => {

  // Calculating war points
  let war_strength_array=[0,0,0,0,0,0];
  let war_points_array=[0,0,0,0,0,0];
  let war_points_total=0;
  for(let ii=0;ii<pieces.length;ii++){
    let row=Math.round(pieces[ii].pos.y);
    war_strength_array[row]+=pieces[ii].war_strength;
    if(pieces[ii].enemy_row>-1)
      war_points_array[pieces[ii].enemy_row]++;
  }
  for(let ii=0;ii<6;ii++){
    war_points_total+=(war_strength_array[ii]>0)?war_points_array[ii]:0;
  }

  // Calculating happy points
  for(let ii=0;ii<pieces.length;ii++){

  }

  return {war_points:war_points_total, happy_points:0};
}

export const rearrangePieces = (pieces=[],choosen_piece_index=-1,action_type) => {

  let diff_y=0;
  let new_pieces = pieces.map( piece => ({
      ...piece,
      old_pos: { x: piece.pos.x, y: piece.pos.y }
  }));

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
    if(new_pieces[ii].rearrange===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y-1){
      new_pieces[ii].pos.x=first_empty_x_on_the_left;
      first_empty_x_on_the_left++;
    }
    if(new_pieces[ii].rearrange===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y){
      new_pieces[ii].pos.x=first_empty_x_on_the_choosen;
      first_empty_x_on_the_choosen++;
    }
    if(new_pieces[ii].rearrange===1 && new_pieces[ii].pos.y===new_pieces[choosen_piece_index].pos.y+1){
      new_pieces[ii].pos.x=first_empty_x_on_the_right;
      first_empty_x_on_the_right++;
    }
  }

  return new_pieces;
}
