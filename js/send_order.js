console.log('send_order_js loaded!');
$(document).ready(function(){
        console.log(sessionStorage.getItem('userno'));

       $(".order_next_btn_4").on('click', function(){
         $('#mem_no_input').val(sessionStorage.getItem('userno'));
         $('#spa_no_input').val(3);
         $("#ord_money_input").val(parseInt($("#total_money").html()));

           $.ajax({
               url: '../add_order_JSON.php',
               type : "POST",
               dataType : 'json',
               data : $("#order_form").serialize(),
               success : function(result) {
                   console.log(result);
               },
               error: function(result) {
                   console.log(result);
               }
           })
       });

   });
