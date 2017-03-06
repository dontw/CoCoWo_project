$(window).load(function(){
  $("#preloader").hide();
  $(".back_login").show();
});

$(document).ready(function() {

});

$(".back_login_submit").on('click', function(){
  alert('login start');
  var adm_id = $('#adm_id').val();
  var adm_pwd = $('#adm_pwd').val();
  $.ajax({
      url: '../back_login.php',
      type : "POST",
      dataType : 'text',
      data :{adm_id,adm_pwd},
      success:function(result) {
          //EMPTY存在的話
          alert("ss",result);
          if(result =="no"){
            alert("帳密錯誤!!");
          }else{
            alert('登入成功!!!');
          }
        },
        error:function(xhr, ajaxOption, thrownError)
    		{
    			alert(xhr.status);
    			alert(thrownError);
    		}
  });
});
