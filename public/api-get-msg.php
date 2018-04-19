<?php
error_reporting(0);

$game_id=$_GET["game_id"];
$user_id=$_GET["user_id"];
$last_msg_id=0+$_GET["last_msg_id"];

if(file_exists('./data/'.$game_id.'.dat')){

  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  $msgs=file('./data/'.$game_id.'.dat');
  foreach($msgs as $msg_id => $msg){
    if($msg_id>$last_msg_id)
	  echo $msg;
  }
}

?>
