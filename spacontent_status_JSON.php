<?php
	try{
		require_once("connectBooks.php");
		$sql = "select * from cospace where spa_no = :status";
		$status = $pdo->prepare($sql);
		$status->bindValue(':status',$_REQUEST["status"]);
		$status->execute();

		$staRow = $status->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($staRow);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>