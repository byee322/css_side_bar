$(document).ready(function(){
	$('a#open').on('click', function(e){
		e.preventDefault();
		$('nav').toggle('fast');
	});
});