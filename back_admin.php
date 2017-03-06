<?php
	try{
		require_once("connectBooks.php");
		$sql = "select * from admin";
		$admins = $pdo->prepare($sql);
		$admins->execute();

	}catch(PDOException $ex){
		echo $ex->getMessage();
		echo $ex->getLine();
	}
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>可可窩CoCoWo</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/back_admin.js">

	</script>

</head>
<body class="back_space">
	<!-- back_nav_bar -->
   <div class="back_nav_bar">
  		<div class="container">
  			<div class="row">
  				<div class="col-xs-12 col-sm-2 col-md-2">
  					<a href="#">
  						<div class="back_nav_logo"></div>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="back_space.html" class="back_nav_a">
  						<!-- <i class="fa fa-search" aria-hidden="true"></i> -->
  						<span class="nav_p">空間資訊管理</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="back_admin.html" class="back_nav_a  back_nav_a_active">
  						<!-- <i class="fa fa-plus-square-o" aria-hidden="true"></i> -->
  						<span class="nav_p">管理者管理</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="blog_back.html" class="back_nav_a back_nav_a_shop">
  						<!-- <i class="fa fa-book" aria-hidden="true"></i> -->
  						<span class="nav_p">會員管理</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="" class="back_nav_a">
  						<!-- <i class="fa fa-volume-control-phone" aria-hidden="true"></i> -->
  						<span class="nav_p">窩誌管理</span>
  					</a>
  				</div>
          <div class="col-xs-20p col-sm-2 col-md-2 nav_user_btn">
            <a href="#" class="back_nav_a">
  						<!-- <i class="fa fa-sign-out" aria-hidden="true"></i> -->
              <span class="nav_p">登出</span>
  					</a>
          </div>
  			</div>
  		</div>
  	</div>
    <div class="stuff_nav"></div>
    <!-- back_nav_bar_end -->

		<div class="container">
			<div class="abgne_tab">
				<ul class="tabs">
					<li><a href="#tab1"></a>管理員管理</li>
					<a href="#" class="border_button red add_admin">新增管理員<i class="fa fa-plus fa-fw" aria-hidden="true"></i></a>
				</ul>

				<div class="tab_container">

					<div id="tab1" class="tab_content">
						<table cellspacing="20">
							<thead>
								<tr>
									<th>管理員編號</th>
									<th>帳號</th>
									<th>姓名</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<?php
									while($row = $admins->fetch(PDO::FETCH_OBJ)){
								 ?>
								<tr class="order_list">
									<td> <?php echo "<h4>". $row->adm_no.'</h4>' ?> </td>
									<td> <?php echo "<h4>".$row->adm_id.'</h4>' ?> </td>
									<td> <?php echo "<h4>".$row->adm_name.'</h4>' ?> </td>
									<?php echo
									"<td>
                  <a class='button red' href='update.php?id=".$row->adm_no."'>刪除</a>
									</td>"
									?>
								</tr>
								<?php } ?>
							</tbody>
						</table>
					</div>


		<div class="backfooter">
			<p class="minp copyright">Copyright © 2017 可可窩 cocowo</p>
		</div>


		<script>
			$(function(){
			// 預設顯示第一個 Tab
				var _showTab = 0;
				$('.abgne_tab').each(function(){
					// 目前的頁籤區塊
					var $tab = $(this);

					var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
					$($defaultLi.find('a').attr('href')).siblings().hide();

					// 當 li 頁籤被點擊時...
					// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
					$('ul.tabs li', $tab).click(function() {
						// 找出 li 中的超連結 href(#id)
						var $this = $(this),
							_clickTab = $this.find('a').attr('href');
						// 把目前點擊到的 li 頁籤加上 .active
						// 並把兄弟元素中有 .active 的都移除 class
						$this.addClass('active').siblings('.active').removeClass('active');
						// 淡入相對應的內容並隱藏兄弟元素
						$(_clickTab).stop(false, true).slideDown(500).siblings().hide();

						return false;
					}).find('a').focus(function(){
						this.blur();
					});
				});
			});
		</script>
</body>
</html>
