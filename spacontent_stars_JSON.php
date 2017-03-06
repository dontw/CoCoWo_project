<?php
header('Content-Type:application/json;charset=UTF-8');	
try {

	require_once("connectBooks.php");

	$sql = "select spa_allscore from cospace where spa_no = :star";


	$starsearch = $pdo->prepare($sql);
	$starsearch->bindValue(':star', $_REQUEST["star"]);
	$starsearch->execute();	

	if( $starsearch->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $starRow = $starsearch->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($starRow);
	    // echo  $baseRow;
	}	

	// echo $_REQUEST["pho"];
	
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>