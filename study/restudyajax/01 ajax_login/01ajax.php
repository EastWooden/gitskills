<?php 
$username=$_GET['username'];
$password=$_GET['password'];

if($username=="admin" && $password=="admin"){
	echo 2;
}
else{
	echo 1;
}


 ?>