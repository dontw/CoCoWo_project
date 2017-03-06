$(window).load(function(){
  $("#preloader").hide();
  $(".back_login_wrap").show();
});


$(".back_login_submit").on('click', function(){
  var adm_id = $('#adm_id').val();
  var adm_pwd = $('#adm_pwd').val();
  $.ajax({
      url: '../back_login.php',
      type : "POST",
      dataType : 'text',
      data :{adm_id,adm_pwd},
      success:function(result) {
          //EMPTY存在的話
          if(result==="yes"){
            alert('登入成功!!!');
            window.location = "back_space.html"
          }else{
            alert("帳密錯誤!!");
          }
        },
        error:function(xhr, ajaxOption, thrownError)
    		{
    			alert(xhr.status);
    			alert(thrownError);
    		}
  });
});
