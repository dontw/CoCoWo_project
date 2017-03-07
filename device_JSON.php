<?php
	try{
		require_once("connectBooks.php");
		$sql = "select * from device";
		$device = $pdo->prepare($sql);
		$device->execute();

		$devRow = $device->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($devRow);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>
