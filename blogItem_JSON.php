<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from blog where blog_no<=:blognum and blog_no>:blogprev";
  $blog = $pdo->prepare( $sql );
  $blog->bindValue(":blognum", $_REQUEST["blognum"]);
  $blog->bindValue(":blogprev", $_REQUEST["blogprev"]);

  $blog->execute();
  $str="";
  $first = 1;
  if( $blog->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    //取回一筆資料
    // $memRow = $blog->fetch(PDO::FETCH_ASSOC);

    while($blogRow = $blog->fetch(PDO::FETCH_ASSOC))
    {
      if($first ==1 && $_REQUEST["blognum"]==2)
      {
        $str .= "<div class='row'>
                <div class='col-xs-12 col-sm-12 search'>
                  <div class='searchBar'>
                    <input type='text' placeholder='Search' class='searchControl'>
                    <input type='submit' class='searchSubmit' onclick='getBlog()'>
                  </div>
                </div>
              </div>";
        $str .= "<div class='row'>";
        $str .= "<div class='blogItem first'>";
        $str .= "<div class='Nowblogno' style='display:none'>{$blogRow["blog_no"]}</div>";
        $str .= "<h2>{$blogRow["blog_title"]}</h2>";
        $str .= "<div class='col-xs-12 col-sm-5'>
                    <img src='img/{$blogRow["blog_img"]}'>
                  </div>";

        $str .= "<div class='col-xs-12 col-sm-7'>";
        $str .="<p class='regular overp' style='color:grey'>{$blogRow["blog_content"]}</p></div>";

        $str .= "<div class='col-xs-12 col-sm-7 yoyo'>";
        $str .= "<div class='buttonRight'>";
        $str .= "<a href='bloglightBox.html' id='button' class='button dark-blue getContext'>More</a>";
        $str .= "</div>";
        $str .= "<div class='buttonleft'>";
        $str .= "<ul>
                    <li>發文時間：{$blogRow["blog_date"]}</li>
                      <li>留言數：{$blogRow["blog_msgcount"]}</li>
                      <li>人氣：{$blogRow["blog_pop"]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>";
          $first = 2;
      }else if($first%2 == 0)
      {
          $str .= "<div class='row'>";
          $str .= "<div class='blogItem'>";
          $str .= "<div class='Nowblogno' style='display:none'>{$blogRow["blog_no"]}</div>";
          $str .= "<h2>{$blogRow["blog_title"]}</h2>";
          $str .= "<div class='col-xs-12 col-sm-5 col-sm-push-7'>
                      <img src='img/{$blogRow["blog_img"]}'>
                    </div>";

          $str .= "<div class='col-xs-12 col-sm-7 col-sm-pull-5'>";
          $str .="<p class='regular overp' style='color:grey'>{$blogRow["blog_content"]}</p></div>";

          $str .= "<div class='col-xs-12 col-sm-7 yoyo2'>";
          $str .= "<div class='buttonRight'>";
          $str .= "<a id='button' class='button dark-blue getContext'>More</a>";
          $str .= "</div>";
          $str .= "<div class='buttonleft'>";
          $str .= "<ul>
                      <li>發文時間：{$blogRow["blog_date"]}</li>
                      <li>留言數：{$blogRow["blog_msgcount"]}</li>
                      <li>人氣：{$blogRow["blog_pop"]}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>";
            $first = 3;
      }else
      {
          $str .= "<div class='row'>";
          $str .= "<div class='blogItem'>";
          $str .= "<div class='Nowblogno' style='display:none'>{$blogRow["blog_no"]}</div>";
          $str .= "<h2>{$blogRow["blog_title"]}</h2>";
          $str .= "<div class='col-xs-12 col-sm-5'>
                      <img src='img/{$blogRow["blog_img"]}'>
                    </div>";

          $str .= "<div class='col-xs-12 col-sm-7'>";
          $str .="<p class='regular overp' style='color:grey'>{$blogRow["blog_content"]}</p></div>";

          $str .= "<div class='col-xs-12 col-sm-7 yoyo'>";
          $str .= "<div class='buttonRight'>";
          $str .= "<a id='button' class='button dark-blue getContext'>More</a>";
          $str .= "</div>";
          $str .= "<div class='buttonleft'>";
          $str .= "<ul>
                      <li>發文時間：{$blogRow["blog_date"]}</li>
                      <li>留言數：{$blogRow["blog_msgcount"]}</li>
                      <li>人氣：{$blogRow["blog_pop"]}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>";
            $first = 2;
      }

    }

    //送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
