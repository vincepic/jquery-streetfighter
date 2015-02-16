$(function(){
	console.log( "ready!" );
	$("#ryu .ready").hide();
	$("#ryu .throwing").hide();
	$("#ryu .cool").hide();
	$("#hadouken .throw").hide();
	$("#ryu").mouseenter(function(){
		$("#ryu .standing").hide();
		$("#ryu .ready").show();
	});
	$("#ryu").mouseleave(function(){
		$("#ryu .ready").hide();
		$("#ryu .standing").show();
	});
	$("#ryu").mousedown(function(){
		$(function(){
				document.getElementById("player").innerHTML = "<embed src='sound/hadouken.mp3' type='audio/mpeg' autostart='true' loop='false' volume='100' hidden='true'>";
				return true;
			});
		$("#ryu .ready").hide()
		$("#ryu .throwing").show();
		$("#hadouken .throw").finish().show();
	});
	$("#ryu").mouseup(function(){
		$("#ryu .throwing").hide();
		$("#ryu .ready").show();
		$(function(){
			$("#hadouken .throw").animate({right: "-9.5em"}, 400, function(){
				$(this).hide()
				$(this).css({"right": "32em"})
			});
		});
	});
	$(document).keydown(function( event ){
		if (event.which == 88){
			$("#ryu .ready").hide();
			$("#ryu .standing").hide();
			$("#ryu .cool").show();
		};
	});
	$(document).keyup(function( event ){
		if (event.which == 88){
			$("#ryu .cool").hide();
			$("#ryu .standing").show();
			$("#ryu").mouseover(function(){
				$("#ryu .standing").hide()
				$("#ryu .ready").show();
			});
		};
	});
});
