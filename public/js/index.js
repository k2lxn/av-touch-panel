// Position tooltips
function position_tooltips() {	
	$(".tooltip-bottom-center").each( function() {	
		//console.log( $(this).parent().attr("id") + " tooltip width: " + $(this).outerWidth() );
		var left_offset = 15 - $(this).outerWidth()/2 ;
		$(this).css("left", left_offset + "px");
	});
}

$(document).ready( function() {
	$(".hoverable").each( function(){ 
		if ( $(this).children(".tooltip") ) {
			$(this).hover( 
				function(){
					$(this).children(".tooltip").css("visibility", "visible");
				}, 
				function() {
		 			$(this).children(".tooltip").css("visibility", "hidden");
				}
			);
		}
	});
});