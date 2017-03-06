$(document).ready(function() {
  $('.add_admin').on('click',function(){
    $('.add_admin_shadow').css({display:'block'});
  });

  $('.add_min_close_btn').on('click',function(){
    $('.add_admin_shadow').css({display:'none'});
  });

  $('.add_admin_btn').on('click',function(){
    alert('ok!');
    var adm_id = $("#adm_id").val();
    var adm_name = $("adm_")
    $.ajax({
      url: '../back_add_admin.php',
      type: 'post',
      dataType: 'json',
      data: {admin: adm_id,}
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });
});
