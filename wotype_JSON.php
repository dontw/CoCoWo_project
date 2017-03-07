<?php
	try{
		require_once("connectBooks.php");
		$sql = "select * from wotype";
		$member = $pdo->prepare($sql);
		$member->execute();

		$memRow = $member->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($memRow);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>
