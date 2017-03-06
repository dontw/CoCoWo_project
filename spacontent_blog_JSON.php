<?php
header('Content-Type:application/json;charset=UTF-8');	
try {

	require_once("connectBooks.php");

	$sql = "select *
			from cospace inner join blog on cospace.spa_no=blog.spa_no
			where cospace.spa_no = :spa";


	$blogmem = $pdo->prepare($sql);
	$blogmem->bindValue(':spa', $_REQUEST["spa"]);
	$blogmem->execute();	

	if( $blogmem->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $blogRow = $blogmem->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($blogRow);
	}	
	
	// echo $_REQUEST["spa"];


	// $sql_insert = "INSERT INTO message (blog_no,msg_content,msg_report,msg_recount) VALUES (1111111,:text)";
	// $usermem2 = $pdo->prepare($sql_insert);
	// $usermem2->bindValue(':text',$_REQUEST["text"]);
	// $usermem2->execute();



} catch (PDOException $e) {
	echo $e->getMessage();
}
?>				