<?php
$username = $_GET['username'];
$password = $_GET['password'];

if($username=='admin' && $password=='123456'){
	echo 2;
}else{
	echo 1;
}


?>