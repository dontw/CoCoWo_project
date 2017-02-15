$(document).ready(function(){

	var scr = $(window).scrollTop();
	var scrNow;
	var move;
	var fixstart = $('#startfixed').height();
	var contextscr = $('#blogcontext').scrollTop();
	// $(window).scroll(function(){
	// 		scr = $(window).scrollTop();
	// 	});

	$('#button, .blogItem #button').click(function(){
		var blogH = $('#blogcontext').height();
		contextscr = 0;
		var scrbottom = $(document).height() - $(window).height() - $(window).scrollTop();
			console.log('blogH:'+blogH+'scrbottom:'+scrbottom);
		// $('.blogContextRight').css({top:0});
		var contextH = $(window).height();
		$('#blogcontext').css({height:contextH-72})
		console.log('contextH'+contextH);
		
		$('#blogcontext').scroll(function(){
			contextscr = $('#blogcontext').scrollTop();
			console.log(contextscr);
			$('.blogContextRight').css({
				top:contextscr+'px',
				'max-height':contextH+'px'
			})
			$('#close').css({
				top:contextscr+'px',
				'max-height':contextH+'px'
			})
			// if(scr>scrbottom)
			// {

			// }

		});
		
		
		// $('.blog').css({
		// 	height:100+'vh',
		// 	overflow:'hidden'
		// });
		// scrNow = scr;
		// move = 0;
		// console.log('scrNow:'+scrNow);
		// console.log('move'+move);

		// $(window).scroll(function(){

		// 	scr = $(window).scrollTop();
		// 	move = scr-scrNow;
		// 	console.log('scr:'+scr+'move'+move);
		// 	$('.blogContextRight').css({top:move+'px'});
		// });


		$('#blogcontext').animate({
			opacity:1,
			top:72
		},1000);
		// $('#lightboxbcc').removeClass('disn');
		$('#lightboxbcc').animate({"opacity": ".70"}, 500, function(){
			// var start = $('#startfixed').offset();
			// var x = start.left;
			// var y = start.top;
			// console.log('x:'+x+'y:'+y);
			var allh = $('#blogcontext').height();
			$('.blogContextRightAll').css({height:allh+'px'});

		});
    // $(".box").animate({"opacity": "1.0"}, 500);
    $("#blogcontext, #lightboxbcc").css("display", "block");
    
    
    
});
	
	$('#lightboxbcc, #close').click(function(){
		
		$('#lightboxbcc').animate({
			opacity:0
		},1000)
		$('#blogcontext').animate({
			scrollTop:0
		},500);
		$('#blogcontext').animate({
			'opacity':'0',
			'top':'-500'
		},1000, 'swing', function(){

			$("#blogcontext, #lightboxbcc").css("display", "none");
			contextscr = 0;
			
		});

		// $('.blog').css({
		// 	height:100+'%',
		// 	overflow:'hidden'
		// });
		// $('#lightboxbcc').removeClass('disn');
		
		
	});

	

	


});