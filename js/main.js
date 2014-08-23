$(document).ready( function(){
	$( "#circle" ).mouseover(function() {
		$(this).addClass('animated flip');
	});
	$( "#circle" ).mouseout(function() {
		setTimeout(function() {
			$('#circle').removeClass('animated flip');
		}, 1000);
	});
});
