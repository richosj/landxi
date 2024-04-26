jQuery(function(){
	
	locationList = function(){
		var depth1 = $('.location-list > li > button');
		var speed = 200;

		$('body').on('click',function(){
			depth1.next('ul').stop().slideUp(speed);
			depth1.parent().removeClass('active');
		});

		depth1.on('click', function(e){
			e.stopPropagation();
			var li = $(this).parent();
			if(!li.hasClass('active')){
				li.addClass('active');
				$(this).next('ul').stop().slideDown(speed);
			}else{
				li.removeClass('active');
				$(this).next('ul').stop().slideUp(speed);
			}
			
		});
	}

	locationList();
});