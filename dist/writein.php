<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = 'goodlist';

	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$numbers = isset($_GET['numbers']) ? $_GET['numbers'] : '';
	$img = isset($_GET['img']) ? $_GET['img'] : '';
	$goodsName = isset($_GET['goodsName']) ? $_GET['goodsName'] : '';
	$price = isset($_GET['price']) ? $_GET['price'] : '';
	$goodsNum = isset($_GET['goodsNum']) ? $_GET['goodsNum'] : '';

	// echo $id;
	//创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);

	//检测连接
	if($conn->connect_error){
		die("连接失败:".$conn->connect_error);
	}
	// echo "连接成功";

	$sql = "INSERT INTO carlist(id,numbers,img,goodsName,price,goodsNum)
			VALUES ('".$id."','".$numbers."','".$img."','".$goodsName."','".$price."','".$goodsNum."')";
	$result = $conn->query('set names utf8');
	if($conn->query($sql) === true){
		echo "新记录插入成功";
	}else{
	   echo "Error: " . $sql . "<br>" . $conn->error;		
	}
	// echo $sql;


	/*$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = 'goodlist';


	//创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);

	//检测连接
	if($conn->connect_error){
		die("连接失败:".$conn->connect_error);
	}
	// echo "连接成功";

	$sql = "INSERT INTO car(car)
			VALUES ('s')";

	if($conn->query($sql) === true){
		echo "新记录插入成功";
	}else{
	   echo "Error: " . $sql . "<br>" . $conn->error;		
	}*/
?>