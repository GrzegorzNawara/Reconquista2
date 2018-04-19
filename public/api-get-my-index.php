<?php
error_reporting(0);

$game_id=$_GET["game_id"];
$user_id=$_GET["user_id"];

if(file_exists('./data/'.$game_id.'.usr')){

  
  $usrs=file('./data/'.$game_id.'.usr');
  $my_index=-1;
  foreach($usrs as $index => $usr){
    if(rtrim($usr)==$user_id)  
      $my_index=$index;
  }
  if($my_index==-1) {
    $fp=fopen('./data/'.$game_id.'.usr','a');
    fwrite($fp,$user_id."\n");
    fclose($fp);
    $my_index=count($usrs);
  }
  
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  echo json_encode($my_index);
}

?>
