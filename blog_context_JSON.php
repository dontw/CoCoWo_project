<?php
try{
  require_once("PDOTEST.php");
  $sql = "select * from blog where blog_no=:blogno";
  $blog = $pdo->prepare( $sql );
  $blog->bindValue(":blogno", $_REQUEST["blogno"]);
  
  
  $blog->execute();
  $str="";
  $first = 1;
  if( $blog->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    //取回一筆資料
    $memRow = $blog->fetch(PDO::FETCH_ASSOC);


    $str.="<div class='col-xs-12 col-sm-10 col-sm-push-1 blogContextHead'>
      <h2>{$memRow["blog_title"]}</h2>
      <p class='minp'>發布時間：2017/02/10</p>
    </div>";

    $str.="<div class='col-xs-12 col-sm-7 col-sm-push-1'>
      <img src='data0/images/{$memRow["blog_slider_img"]}'>
      <p>{$memRow["blog_content"]}</p>";

    $str.="<ul class='share'>
          <li class='facebook button '><a href='#'><i class='fa fa-facebook ' aria-hidden='true'></i>facebook</a></li>
          <li class='google button'><a href='><i class='fa fa-google-plus ' aria-hidden='true'></i>google+</a></li>
          <li class='twitter button'><a href='><i class='fa fa-twitter ' aria-hidden='true'></i>twitter</a></li>
        </ul>";

    $str.="<div class='row writeRow'>
          <div class='writeAll'>
            <div class='write'>
              <img  src='img/write.jpeg'>
            </div>
            <div class='writeText'>
              <p class='minp'>Written By</p>
              <p>Heisenberg</p>
            </div>
          </div>
        </div>";

    $str.="<div class='row messageRow'>
            <h4>留言區</h4>";



    try{
            require_once("PDOTEST.php");
            $sql2 = "select * from member where mem_no=:userno";
            $member = $pdo->prepare( $sql2 );
            $member->bindValue(":userno", $_REQUEST["userno"]);

            $member->execute();
            
            if( $member->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
             
               $str.="<div class='iMessage'>
                        <div class='row'>
                          <div class='col-xs-4 col-sm-2'>
                            <img src='img/105-User-512.png'>
                          </div>
                          <div class='col-xs-8 col-sm-10'>
                            <div class='row'>
                              <textarea class='re' placeholder='回覆...'></textarea>
                            </div>
                            <div class='row'>
                              <a id='reButton' class='button dark-blue subMessage' href='#ggg'>送出</a>
                            </div>
                          </div>
                        </div>
                      </div>";
            }else
            {
              //找得到
              //取回一筆資料
              $memMsgRow = $member->fetch(PDO::FETCH_ASSOC);

               $str.="<div class='iMessage'>
                        <div class='row'>
                          <div class='col-xs-4 col-sm-2'>
                            <img src='img/{$memMsgRow["mem_img"]}'>
                          </div>
                          <div class='col-xs-8 col-sm-10'>
                            <div class='row'>
                              <textarea class='re' placeholder='回覆...'></textarea>
                            </div>
                            <div class='row'>
                              <a id='reButton' class='button dark-blue subMessage' href='#ggg'>送出</a>
                            </div>
                          </div>
                        </div>
                      </div>";

            }
          }catch(PDOException $e)
          {
            echo $e->getMessage();
          }
             

          $str.="<ul class='message'>";


          
          try{
            require_once("PDOTEST.php");
            $sql3 = "select * from blog a join message b on a.blog_no = b.blog_no join member c on b.mem_no = c.mem_no where a.blog_no =:blogno
            order by msg_time";
            $blogtwo = $pdo->prepare( $sql3 );
            $blogtwo->bindValue(":blogno", $_REQUEST["blogno"]);


            $blogtwo->execute();
            $first = 1;
            if( $blogtwo->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
              
              $str.="<li>
              
              <div style='text-align:center'>
                <p>目前無留言唷...</p>
              </div>
              </li>";

            }else
            {
              //找得到
              //取回一筆資料
             while($btRow = $blogtwo->fetch(PDO::FETCH_ASSOC))
             {
              $str.="<li>
              <img class='col-xs-2 col-sm-2' src='img/{$btRow["mem_img"]}'>
              <div class='col-xs-10 col-sm-10'>
                <h5 class='bold'>{$btRow["mem_name"]}</h5>
                <p><span>發表時間：{$btRow["msg_time"]}</span></p>
                <p>{$btRow["msg_content"]}</p>
              </div>
              </li>";
             }
              

            }
          }catch(PDOException $e)
          {
            echo $e->getMessage();
          }
   
          $str.="</ul>
          </div>
      </div>";
      $str.="<div class='col-xs-12 col-sm-3 col-sm-push-1 blogContextRightAll'>
        <div class=' blogContextRight'>
          <div class='part'>
            <h4>最新文章</h4>
            <img src='img/item1.png'>
            <p class='minp'>「為熱愛的事而義無反顧，是創業者的生活態度。」－ 卡市達創業加油站 </p>
          </div>
          <div class='part'>
            <h4>熱門文章</h4>
            <ul>
              <li><span>1</span>因intelmach影響，北朝鮮共同工作空間需....</li>
              <li><span>2</span>因intelmach影響，北朝鮮共同工作空間需....</li>
              <li><span>3</span>因intelmach影響，北朝鮮共同工作空間需....</li>
              <li><span>4</span>因intelmach影響，北朝鮮共同工作空間需....</li>
              <li><span>5</span>因intelmach影響，北朝鮮共同工作空間需....</li>
            </ul>
          </div>


        </div>

      </div>";


    
    
    //送出json字串
    echo json_encode( $str );
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>