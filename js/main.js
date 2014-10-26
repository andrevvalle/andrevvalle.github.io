$(document).ready(function() {
	
	$("#circle").mouseenter(function() {
		$(this).addClass('animated flip');
		setTimeout(function() {
			$('#circle').removeClass('animated flip');
		}, 1000);
	});
	$("#circle").mouseleave(function() {
		clearTimeout(1000);
	});
});