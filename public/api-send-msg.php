<?php
//error_reporting(0);

$game_id=$_GET["game_id"];
$user_id=$_GET["user_id"];
$action=$_GET["action"];

$fp=fopen('./data/'.$game_id.'.dat','a');
fwrite($fp,$action."\n");
fclose($fp);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

echo $action;
echo 'OK';


?>
