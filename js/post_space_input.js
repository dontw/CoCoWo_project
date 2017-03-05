$(document).ready(function() {
  if (sessionStorage.getItem('userno') === null) {
    alert("請先登入會員!");
    var url = "post_space.html";
    window.location = url;
  }else{
  }
});

$('.fs-submit').on('click',function(){
  if(confirm("確認送出?")){
    alert('刊登完成!即將返回刊登主頁');
  }else{

  }
});
