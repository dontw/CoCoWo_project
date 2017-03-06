<?php
header('Content-Type:application/json;charset=UTF-8');

try {

	require_once("connectBooks.php");

	$sql= "select *
			from cospace inner join blog on cospace.spa_no=blog.spa_no inner join blogphoto on blog.blog_no=blog.blog_no
			where cospace.spa_no = :blog";


	$bd = $pdo->prepare($sql);
	$bd->bindValue(':blog',$_REQUEST["blog"]);
	$bd->execute();



	if( $bd->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $bdRow = $bd->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($bdRow);
	}
	
	// echo $_REQUEST["blog"];

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>									