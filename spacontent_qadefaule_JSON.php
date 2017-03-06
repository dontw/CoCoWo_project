<?php
header('Content-Type:application/json;charset=UTF-8');

try {

	require_once("connectBooks.php");

	// $sql= "select * 
	// 	   from blog inner join message on blog.blog_no=message.blog_no
	// 	   where blog.blog_no = :blog";

	$sql = "select * 
			from cospace inner join qa on cospace.spa_no=qa.spa_no
			where cospace.spa_no = :blog";

	$qad = $pdo->prepare($sql);
	$qad->bindValue(':blog',$_REQUEST["blog"]);
	$qad->execute();



	if( $qad->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $qadRow = $qad->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($qadRow);
	}
	
	// echo $_REQUEST["blog"];

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>				