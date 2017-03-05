<?php
	try{
		require_once("cocowoBooks.php");
		$sql = "select * from wotype";
		$member = $pdo->prepare($sql);
		$member->execute();

		$memRow = $member->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($memRow);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>