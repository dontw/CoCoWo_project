<?php
header('Content-Type:application/json;charset=UTF-8');	
try {

	require_once("connectBooks.php");

	$sql = "select * from cospace inner join spadevice on cospace.spa_no=spadevice.spa_no inner join device on spadevice.dev_no=device.dev_no where cospace.spa_no = :dev";


	$basesearch = $pdo->prepare($sql);
	$basesearch->bindValue(':dev', $_REQUEST["dev"]);
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

	//echo $_REQUEST["dev"];
	
} catch (PDOException $e) {
	echo $e->getMessage();
}

?>