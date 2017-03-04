$(document).ready(function() {
  if (sessionStorage.getItem("username")) {
    var url = "post_space_input.php";
    window.location = url;
    return false;
  }else{
    alert("請先登入會員!");
    $('.main_nav_user_a').click();
  }
});
