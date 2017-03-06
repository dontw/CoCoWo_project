<?php
header('Content-Type:application/json;charset=UTF-8');
try {

	require_once("connectBooks.php");

	$sql = "select *
			from coorder inner join member on coorder.mem_no=member.mem_no
			where coorder.spa_no in (select spa_no from cospace where spa_no = :user)";


	$usermem = $pdo->prepare($sql);
	$usermem->bindValue(':user', $_REQUEST["user"]);
	$usermem->execute();

	if( $usermem->rowCount() == 0 ){ //找不到
	    //傳回空的JSON字串
	    echo "{}";
	}else{ //找得到
	    //取回一筆資料
	    $userRow = $usermem->fetchAll(PDO::FETCH_ASSOC);
	    //送出json字串
	    echo json_encode($userRow);
	}

	// echo $_REQUEST["user"];

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>
