<?php
	try{
		require_once("connectbooks.php");

		$device = $_REQUEST["device"];
		
		$devices = implode(',',$device);//將陣列轉成字串且用逗號隔開

		$sql = "select * from cospace join photo on cospace.spa_no=photo.spa_no join spadevice on cospace.spa_no=spadevice.spa_no join device d on spadevice.dev_no=d.dev_no where wot_no=:wotype and spa_plimit>=:peocount and spa_price>=:custom and d.dev_no in (:device)";

		$detailedsearch = $pdo->prepare($sql);
		$detailedsearch->bindValue(':wotype', $_REQUEST["wotype"]);
		$detailedsearch->bindValue(':peocount', $_REQUEST["peocount"]);
		$detailedsearch->bindValue(':custom', $_REQUEST["custom"]);
		$detailedsearch->bindValue(':device', $devices);
		$detailedsearch->execute();	

		$detRow = $detailedsearch->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($detRow);

		//測試傳回PHP的值
		//echo $_REQUEST["wotype"];

		
	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>			