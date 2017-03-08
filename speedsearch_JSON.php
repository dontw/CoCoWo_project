<?php

try {
	require_once("connectBooks.php");

	$sql = "select * from cospace inner join photo on cospace.spa_no=photo.spa_no where wot_no=:work and spa_plimit>=:people and spa_addr like :address";

	$address =  $_REQUEST["address"];
	$add = "%$address%";

	$basesearch = $pdo->prepare($sql);
	$basesearch->bindValue(':work', $_REQUEST["work"]);
	$basesearch->bindValue(':people', $_REQUEST["people"]);
	$basesearch->bindValue(':address', $add);
	$basesearch->execute();

	if( $basesearch->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $baseRow = $basesearch->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode( $baseRow );
	}

} catch (PDOException $e) {
	echo $e->getMessage();
}

?>
