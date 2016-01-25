(function($){

	$(document).on("scroll",function(){
		'use strict';
		
		if( jQuery(document).scrollTop() > 50 ) {
			jQuery("body").removeClass("header-large").addClass("header-small");
		}
		else {
			jQuery("body").removeClass("header-small").addClass("header-large");
		}
	});


}(jQuery));




