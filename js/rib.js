$(document).ready(function() {
    $('.author').mouseenter(function(){
		//$('.author_bio', this).slideToggle('slow');
		$(this).find('.author_bio').slideToggle('slow');
		// $('.author_bio').slideToggle('slow');
	});
	// , function(){
	// 	$('.author_bio').slideToggle('slow');
 //    });
    $('.author').mouseleave(function(){
		// $('.author_bio').slideToggle('slow');
		$(this).find('.author_bio').slideToggle('slow');
    });

    $('#nav_bar_button').click(function(){
    	$('#nav_links').slideToggle('slow');
    });
});