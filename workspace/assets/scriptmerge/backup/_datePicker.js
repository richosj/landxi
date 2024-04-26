jQuery(function($){
	// var datepicker = $("#datepicker");
	if(!$.datepicker) return false;
	var datePicker;
	
	var dateInit = function(){
		$.datepicker.setDefaults({
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			showMonthAfterYear: true,
			changeYear: false,
			yearSuffix: '년',
		});
	}

	var dateRange = function(){
		var dateRangSet = $('.cs-datepicker-set');
		dateRangSet.each(function(){
			var row = $(this);
			var from = row.find('.js__date-from');
			var to = row.find('.js__date-to');

			// from.datepicker("setDate",new Date());
			// to.datepicker("setDate","+ 1w");

			from.datepicker({
			}).on( "change", function() {
				// console.log('나 바꼈다');
				to.datepicker( "option", "minDate", getDateRang( this ) );
			});

			to.datepicker({
			}).on( "change", function() {
				from.datepicker( "option", "maxDate", getDateRang( this ) );
			});

		});
	}

	function getDateRang( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( "yy-mm-dd", element.value );
		} catch( error ) {
			date = null;
		}

		return date;
	}

	

	var init = function(){
		//datepicker 한글설정
		dateInit();

		$('.js__datepicker').datepicker({
			changeMonth: false,
			changeYear: false,
		});

		$('.modal-calendar').on('click',function(){
		});
		
		dateRange();
	}

	init();

	$('.modal-datepicker_close, .modal-datepicker_wrap').click(function(){
			$('.modal-datepicker').hide();
	});
	
	$('.datepicker').click(function(e){
			e.stopPropagation();
	});

	//date
	getDate = function(date){
		if(!date) date = new Date();
		var y = date.getFullYear();
				m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
				d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

				return y + '-' + m + '-' + d;
	}
});