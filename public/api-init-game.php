<?php
//error_reporting(0);

$game_id=$_GET["game_id"];
$scenario_id=$_GET["scenario_id"];

$scenario=['scenario1'=>[
  'my_cards'=>3,
  'usr_cards'=>3,
  'npc_cards'=>8,
  'usr_pieces'=> ['king1','knight1','knight2','rebel1'],
  'npc_pieces'=> ['levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'],
  'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
  'house_pieces'=> ['house1','house2','house3']
],
'scenario2'=>[
  'my_cards'=>3,
  'usr_cards'=>3,
  'npc_cards'=>8,
  'usr_pieces'=> ['king1','knight1','knight2','rebel1'],
  'npc_pieces'=> ['levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'],
  'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
  'house_pieces'=> ['house1','house2','house3']
]];

$pieces_row_max=[0,0,0,0,0,0];
$enemy_row_stack=[0,0,0,0,0,0];

// RESET FILE
$fp=fopen('./data/'.$game_id.'.dat','w'); fclose($fp);
$fp=fopen('./data/'.$game_id.'.usr','w'); fclose($fp);

// SET SCENARIO
$fp=fopen('./data/'.$game_id.'.dat','a');
fwrite($fp,json_encode([
  'type'=>'SET_SCENARIO',
  'user_id'=>'system',
  'scenario'=>$scenario[$scenario_id]
  ])."\n");
fclose($fp);

// ADD HOUSE PIECES
foreach($scenario['house_pieces'] as $piece_id){
  $random_row=rand(0,5);
  $fp=fopen('./data/'.$game_id.'.dat','a');
  fwrite($fp,json_encode([
    'type'=>'ADD_PIECE',
    'user_id'=>'system',
    'piece'=>[
      'piece_id'=>$piece_id,
      'can_move'=>0,
      'rearrange'=>1,
      'onActivate'=>'SHOW_INFO',
      'user_id'=>'system',
      'enemy_row'=>-1,
      'pos'=>['x'=>$pieces_row_max[$random_row], 'y'=>$random_row]
  ]])."\n");
  fclose($fp);
  $pieces_row_max[$random_row]++;
}

// ADD USR PIECES
foreach($scenario['usr_pieces'] as $piece_id){
  $random_row=rand(0,5);
  $fp=fopen('./data/'.$game_id.'.dat','a');
  fwrite($fp,json_encode([
    'type'=>'ADD_PIECE',
    'user_id'=>'system',
    'piece'=>[
      'piece_id'=>$piece_id,
      'can_move'=>1,
      'rearrange'=>1,
      'onActivate'=>'SHOW_INFO',
      'user_id'=>'available',
      'enemy_row'=>-1,
      'pos'=>['x'=>$pieces_row_max[$random_row], 'y'=>$random_row]
  ]])."\n");
  fclose($fp);
  $pieces_row_max[$random_row]++;
}

// ADD NPC PIECES
foreach($scenario['npc_pieces'] as $piece_id){
  $random_row=rand(0,5);
  $fp=fopen('./data/'.$game_id.'.dat','a');
  fwrite($fp,json_encode([
    'type'=>'ADD_PIECE',
    'user_id'=>'system',
    'piece'=>[
      'piece_id'=>$piece_id,
      'can_move'=>1,
      'rearrange'=>1,
      'onActivate'=>'SHOW_INFO',
      'user_id'=>'system',
      'enemy_row'=>-1,
      'pos'=>['x'=>$pieces_row_max[$random_row], 'y'=>$random_row]
  ]])."\n");
  fclose($fp);
  $pieces_row_max[$random_row]++;
}

// ADD ENEMY PIECES
foreach($scenario['enemy_pieces'] as $piece_id){
  $random_row=rand(0,5);
  $fp=fopen('./data/'.$game_id.'.dat','a');
  fwrite($fp,json_encode([
    'type'=>'ADD_PIECE',
    'user_id'=>'system',
    'piece'=>[
      'piece_id'=>$piece_id,
      'can_move'=>0,
      'rearrange'=>0,
      'war_strength'=>-2,
      'onActivate'=>'SHOW_INFO',
      'user_id'=>'system',
      'enemy_row'=>$random_row,
      'pos'=>['x'=>15-0.5*$enemy_row_stack[$random_row], 'y'=>$random_row-0.18*$enemy_row_stack[$random_row]]
  ]])."\n");
  fclose($fp);
  $enemy_row_stack[$random_row]++;
}


$fp=fopen('./data/'.$game_id.'.dat','a');
fwrite($fp,json_encode([
  'type'=>'GAME_SETUP_READY',
  'user_id'=>'system'])."\n");
fclose($fp);





if(file_exists('./data/'.$game_id.'.dat')){
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  echo 'OK';
}

?>
