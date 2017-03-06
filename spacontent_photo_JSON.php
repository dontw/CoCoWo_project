<?php
header('Content-Type:application/json;charset=UTF-8');	
try {

	require_once("connectBooks.php");

	$sql = "select * from cospace inner join photo on cospace.spa_no=photo.spa_no where cospace.spa_no = :pho";


	$basesearch = $pdo->prepare($sql);
	$basesearch->bindValue(':pho', $_REQUEST["pho"]);
	$basesearch->execute();	

	if( $basesearch->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $baseRow = $basesearch->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($baseRow);
	    // echo  $baseRow;
	}	

	// echo $_REQUEST["pho"];
	
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>