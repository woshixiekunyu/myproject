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

	//查询数据
	$sql = 'select * from goods';

	//设置编码
	$result = $conn->query('set names utf8');

	//查询数据库获取数据
	$result = $conn->query($sql);

	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);


	// $contents = mb_convert_encoding( $contents, 'UTF-8', 'UTF-8,GBK,GB2312,BIG5');

	



	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>