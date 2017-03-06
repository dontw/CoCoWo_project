<?php
header('Content-Type:application/json;charset=UTF-8');	
try {

	require_once("connectBooks.php");

	$sql_insert = "INSERT INTO `qa` (`mem_no`, `spa_no`, `qa_qcontent`,`qa_acontent`, `qa_qtime`, `qa_atime`) VALUES (11, :bg , :txt , null ,'2017-03-06', '2017-03-06');";
	$qamem = $pdo->prepare($sql_insert);
	$qamem->bindValue(':bg',$_REQUEST["bg"]);
	$qamem->bindValue(':txt',$_REQUEST["txt"]);
	$qamem->execute();


	$sql_select = "select * 
				   from cospace inner join qa on cospace.spa_no=qa.spa_no
				   where cospace.spa_no = :bg";

	$qamem2 = $pdo->prepare($sql_select);
	$qamem2->bindValue(':bg',$_REQUEST["bg"]);
	$qamem2->execute();



	if( $qamem2->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $qaRow = $qamem2->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($qaRow);
	}	

	//echo $_REQUEST["bg"];
	// echo $_REQUEST["txt"];

	

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>				