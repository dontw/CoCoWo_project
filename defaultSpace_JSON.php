<?php
	try{
		require_once("connectBooks.php");
		$c = 0;

		$sql = "select * from cospace";

		$cospace = $pdo->prepare($sql);
		$cospace->execute();
		$space = $cospace->fetchAll(PDO::FETCH_ASSOC);
		
		$sql2 = "select pho_name from photo where spa_no = :spa";
		$cospace2 = $pdo->prepare($sql2);
		$cospace2->bindParam(':spa',$c);


		for($i=0 ; $i < count($space) ;$i++ ){

			$c = $space[$i]['spa_no'];
			$cospace2->execute();
			// $space2 = $cospace2->fetchAll(PDO::FETCH_ASSOC);

			// $space[$i]['pho_name'] = $space2;
			// while($space2 = $cospace2->fetch(PDO::FETCH_ASSOC)){
			// 	$img = $space2['pho_name'];
			// 	$space[$i]['pho_name'][] = $img;   
			// }

			$space2 = $cospace2->fetch(PDO::FETCH_ASSOC);
			$img = $space2['pho_name'];
			$space[$i]['pho_name'] = $img;   
		}

		// while($space = $cospace->fetch(PDO::FETCH_ASSOC)){
		// 	$c =  $space['spa_no'];
		// 	$cospace2->execute();
		// 	$space2 = $cospace2->fetchAll(PDO::FETCH_ASSOC);
		// }
		

		echo json_encode($space);

	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>