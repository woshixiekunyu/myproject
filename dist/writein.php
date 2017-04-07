<?php
	$servername = "localhost";
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

	$sql = "INSERT INTO goods(goodsName,price,decription,img)
			VALUES ('那句','200','good','22')";

	if($conn->query($sql) === true){
		echo "新记录插入成功";
	}else{
	   echo "Error: " . $sql . "<br>" . $conn->error;		
	}
?>