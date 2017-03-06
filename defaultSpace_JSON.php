<?php
	try{
		require_once("cocowoBooks.php");
		$sql = "select  *, count(pho_name) from cospace,photo where cospace.spa_no = photo.spa_no";
		$cospace = $pdo->prepare($sql);
		$cospace->execute();

		$cospace = $cospace->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($cospace);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>
