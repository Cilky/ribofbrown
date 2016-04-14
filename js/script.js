$( document ).ready(function() {
    console.log( "ready!" );

    var clicked;

    $( "#days a" ).click(function(e) {
    	e.preventDefault();

    	if(clicked === undefined) {
    		console.log("setting up");
    		clicked = $(this);
    		// console.log($(this).attr('id'));
    		$("#articles").slideDown();
    	} else {
    		console.log("in the else");

    		if($(this)[0] === clicked[0]) {
    			$("#articles").slideToggle();
    		} else {
    			$("#articles").slideDown();
    		}

    		clicked = $(this);
    	}
  		
	});
});