import debug from '../include/debug'

export const calculatePoints = (my_piece_id='',pieces=[]) => {

  // Calculating war points
  const war_points_total=Math.floor(pieces
  .map((piece) => ({...piece, row: (piece.enemy_row>=0)?piece.enemy_row:piece.pos.y}))
  .map((piece) => ({row: piece.row, war_strength: piece.war_strength, war_points: (piece.enemy_row>=0)?1.5:0}))
  .reduce((row_sum,piece) => {
    row_sum[piece.row].war_strength+=piece.war_strength;
    row_sum[piece.row].war_points+=piece.war_points;
    return row_sum;
  },[{war_strength:0,war_points:0},{war_strength:0,war_points:0},{war_strength:0,war_points:0},{war_strength:0,war_points:0},{war_strength:0,war_points:0},{war_strength:0,war_points:0}])
  .reduce((total,row) => (row.war_strength>0)?total+row.war_points:total,0));

  //const war_points_total=Math.floor(war_points_array.reduce((sum,points,ii) => (war_strength_array[ii]>0)?sum+points:sum,0));

  // Calculating happy points
  const my_role=my_piece_id.substring(0,my_piece_id.length-1);
  const my_piece=pieces.filter((piece) => piece.piece_id===my_piece_id)[0];
  let happy_points=0;

  if(my_role==='king')
    happy_points=war_points_total;

  if(my_role==='knight')
    happy_points=pieces.filter((piece) => piece.pos.y===my_piece.pos.y && piece.piece_id!==my_piece.piece_id)
    .map((piece) => ({role: piece.piece_id.substring(0,piece.piece_id.length-1), happy_points: 0}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='king')?6:piece.happy_points}))
    .reduce((sum,piece) => sum+piece.happy_points,0);

  if(my_role==='rebel')
    happy_points=pieces.filter((piece) => piece.pos.y===my_piece.pos.y && piece.piece_id!==my_piece.piece_id)
    .map((piece) => ({role: piece.piece_id.substring(0,piece.piece_id.length-1), happy_points: 0}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='farmer')?2:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='merchant')?2:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='king')?-6:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='levy')?-6:piece.happy_points}))
    .reduce((sum,piece) => sum+piece.happy_points,0);

  if(my_role==='levy')
    happy_points=pieces.filter((piece) => piece.pos.y===my_piece.pos.y && piece.piece_id!==my_piece.piece_id)
    .map((piece) => ({role: piece.piece_id.substring(0,piece.piece_id.length-1), happy_points: 0}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='farmer')?3:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='merchant')?3:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='rebel')?-6:piece.happy_points}))
    .reduce((sum,piece) => sum+piece.happy_points,0);

  if(my_role==='farmer')
    happy_points=pieces.filter((piece) => piece.pos.y===my_piece.pos.y && piece.piece_id!==my_piece.piece_id)
    .map((piece) => ({role: piece.piece_id.substring(0,piece.piece_id.length-1), happy_points: 0}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='farmer')?2:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='rebel')?2:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='king')?2:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='levy')?-3:piece.happy_points}))
    .reduce((sum,piece) => sum+piece.happy_points,0);

  if(my_role==='merchant')
    happy_points=pieces.filter((piece) => piece.pos.y===my_piece.pos.y && piece.piece_id!==my_piece.piece_id)
    .map((piece) => ({role: piece.piece_id.substring(0,piece.piece_id.length-1), happy_points: 0}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='house')?6:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='merchant')?-6:piece.happy_points}))
    .map((piece) => ({role: piece.role, happy_points: (piece.role==='levy')?-3:piece.happy_points}))
    .reduce((sum,piece) => sum+piece.happy_points,0);

  return {war_points:war_points_total, happy_points:happy_points};
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
