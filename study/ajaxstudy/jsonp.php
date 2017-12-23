<?php 	
$callback = $_GET['_jsonp'];
$arry =  array("zhangsan","lishi","wangwu");
echo $callback."(".json_encode($arry).")";
 ?>