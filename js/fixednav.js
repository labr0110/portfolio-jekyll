$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 60) {
    	$('#toggle').addClass('change');
    }
    else {
    $('#toggle').removeClass('change');
    }
  });
});
