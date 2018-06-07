<?php
//error_reporting(0);

$game_id=$_GET["game_id"];
$scenario_id=$_GET["scenario_id"];

if($scenario_id=='scenario-a1'){
  $scenario=[
    'title'=>'A1. Silny król',
    'subtitle'=>[
      'Dla 8 graczy: Król, 2x Rycerz, 5x Chłop',
      'Scenariusz do poznania gry i integracji grupy.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć co najmniej 500 punktów wojny',
      '- Czas gry nie jest ograniczony'
    ],

    'burnt_points_weight'=>1,
    'war_points_weight'=>100,
    'happy_points_weight'=>10,

    'my_cards'=>3,
    'usr_cards'=>3,
    'npc_cards'=>8,
    'usr_pieces'=> ['king1','knight1','knight2','farmer1','farmer2','farmer3','farmer4','farmer5'],
    'npc_pieces'=> ['rebel1','levy1','merchant1','merchant2','merchant3'],
    'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
    'house_pieces'=> ['house1','house2','house3'],
    'king1-cards' => [
      'enemy1','enemy2','enemy3','enemy4',
      'king1','king1',
      'rebel1','levy1',
      'rebel1','levy1',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'knight1-cards' => [
      'enemy4','enemy5',
      'knight1','knight1','knight1',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'knight2-cards' => [
      'enemy5','enemy6',
      'knight2','knight2','knight2',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer1-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer2-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer3-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer4-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer5-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ]
];}
elseif($scenario_id=='scenario-a2'){
  $scenario=[
    'title'=>'A2. Anarchia',
    'subtitle'=>[
      'Dla 8 graczy: Król, 2x Rycerz, 5x Chłop',
      'Scenariusz do poznania gry i integracji grupy.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 30 punktów wojny',
      '- Czas gry nie jest ograniczony'
    ],

    'burnt_points_weight'=>1,
    'war_points_weight'=>10,
    'happy_points_weight'=>100,

    'my_cards'=>3,
    'usr_cards'=>3,
    'npc_cards'=>8,
    'usr_pieces'=> ['king1','knight1','knight2','farmer1','farmer2','farmer3','farmer4','farmer5'],
    'npc_pieces'=> ['rebel1','levy1','merchant1','merchant2','merchant3'],
    'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
    'house_pieces'=> ['house1','house2','house3'],
    'king1-cards' => [
      'enemy1','enemy2','enemy3','enemy4',
      'king1','king1',
      'rebel1','levy1',
      'rebel1','levy1',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'knight1-cards' => [
      'enemy4','enemy5',
      'knight1','knight1','knight1',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'knight2-cards' => [
      'enemy5','enemy6',
      'knight2','knight2','knight2',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer1-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer2-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer3-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer4-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'farmer5-cards' => [
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ]
];}
elseif($scenario_id=='scenario-a3'){
  $scenario=[
    'title'=>'A3. Kupcy',
    'subtitle'=>[
      'Dla 5 graczy: Król, Poborca, 3x Kupiec',
      'Scenariusz pokazujący prawdopodobieństwo zaangażowania. Czy domki są tam, gdzie wrogowie.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć co najmniej 30 punktów wojny'
    ],

    'burnt_points_weight'=>1,
    'war_points_weight'=>10,
    'happy_points_weight'=>100,

    'my_cards'=>3,
    'usr_cards'=>3,
    'npc_cards'=>8,
    'usr_pieces'=> ['king1','levy1','merchant1','merchant2','merchant3'],
    'npc_pieces'=> ['rebel1','knight1','knight2','farmer1','farmer2','farmer3','farmer4','farmer5'],
    'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
    'house_pieces'=> ['house1','house2','house3'],
    'king1-cards' => [
      'enemy1','enemy2','enemy3','enemy4',
      'king1','king1',
      'rebel1','levy1',
      'rebel1','levy1',
      'farmer1','farmer2','farmer3','farmer4','farmer5',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'levy1-cards' => [
      'enemy4','enemy5',
      'knight1','knight1','knight1',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'merchant1-cards' => [
      'enemy1',
      'merchant1','merchant1','merchant1',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'merchant2-cards' => [
      'enemy2',
      'merchant2','merchant2','merchant2',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'merchant3-cards' => [
      'enemy3',
      'merchant3','merchant3','merchant3',
      'merchant1','merchant2','merchant3',
      'farmer1','farmer2','farmer3','farmer4','farmer5'
    ]
];}
else{
  $scenario=[
    'title'=>'AX. Silny król i chłopi',
    'subtitle'=>[
      'Dla 1-8 graczy: Król, 2x Rycerz, 5x Chłop',
      'Scenariusz do poznania gry i integracji grupy.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 5 punktów wojny',
      '- Czas gry jest ograniczony do 15 minut'
    ],
    'my_cards'=>3,
    'usr_cards'=>3,
    'npc_cards'=>8,
    'usr_pieces'=> ['king1','knight1','knight2','rebel1'],
    'npc_pieces'=> ['levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'],
    'enemy_pieces'=> ['enemy1','enemy2','enemy3','enemy4','enemy5','enemy6'],
    'house_pieces'=> ['house1','house2','house3'],
    'king1-cards' => [
      'king1',
      'king1','knight1','knight2','rebel1',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5',
      'enemy1','enemy2','enemy3'
    ],
    'knight1-cards' => [
      'knight1',
      'king1','knight1','knight2','rebel1',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'knight2-cards' => [
      'knight2',
      'king1','knight1','knight2','rebel1',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'
    ],
    'rebel1-cards' => [
      'knight1',
      'king1','knight1','knight2','rebel1',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5',
      'levy1','merchant1','merchant2','merchant3','farmer1','farmer2','farmer3','farmer4','farmer5'
    ]
];}

$scenario['scenario_id']=$scenario_id;
$pieces_row_max=[0,0,0,0,0,0];
$enemy_row_stack=[0,0,0,0,0,0];

// RESET FILE
$fp=fopen('./data/'.$game_id.'.dat','w'); fclose($fp);


// SHUFFLE THE CARDS
foreach($scenario[usr_pieces] as $tmp_piece_id){
  shuffle($scenario[$tmp_piece_id.'-cards']);
}

// SET SCENARIO
$fp=fopen('./data/'.$game_id.'.dat','a');
fwrite($fp,json_encode([
  'type'=>'SET_SCENARIO',
  'user_id'=>'system',
  'scenario'=>$scenario
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
