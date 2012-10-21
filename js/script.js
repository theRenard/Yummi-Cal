/* Author:

*/

	var container = $('#absolute_container'),
	 	datepicker = $('#inline_datepicker'),
	 	calendar = $('#resizable_calendar'),
		position = $('#datepicker_position'),
		originalSize = {top: 0, left: 0};	

	function datePickerTextSize() {
	
		// this is used to set datepicker font size, the fontRation is based on datepicker width.
	
		var fontRatio = 0.050;	// sure you can change the fontRatio to fit your needs, fontRatio modifies the calendar height, 0.032 works fine for me, try 0.050
		
		$('#inline_datepicker').each(function() {
			var datepicker = $(this).find('.datepick'),
			datepickerWidth = datepicker.width(),
			newFontSize = parseInt(datepickerWidth * fontRatio);
	
			$(this).css({'font-size' : newFontSize});

		});
	}
	
	function datePickerPosition() {
	
		// this sets position for the calendar, only needed in this demo. 
		
		var offset = position.offset();
		
		container
			.offset({ top: offset.top, left: offset.left})
			.width(position.width())
			.height(datepicker.outerHeight(true));
			
		position
			.height(calendar.outerHeight(true));
			
	}

	
	$(window).on("throttledresize", function( event ) {	// you can find more about this here: https://github.com/louisremi/jquery-smartresize
		
		datePickerPosition(); // just for demo.
		
		datePickerTextSize(); // resize font size
		
	});
	
	$(window).load(function() {
		
		datePickerPosition(); // just for demo.
	
		datePickerTextSize(); // resize font size
	
	});

	$(document).ready(function() {
	
		// this makes the datepicker container resizable, you don't need it at all, it's just for demoing
		
		if (!Modernizr.touch){
		
			var containerSize;
	
			calendar.resizable({
				aspectRatio: true,
				start: function(event, ui)  {
				
					containerSize = {
						
						width: calendar.width(),
						height: calendar.height(),
						font: parseInt($('#inline_datepicker').find('.datepick').css('font-size'))
						
					}
					
				},
				stop: function(event, ui) {
					
					$('#inline_datepicker').find('.datepick').css({'font-size': containerSize.font});
					$(this).animate({
						
						width: containerSize.width,
						height: containerSize.height
						
					}, 1000, 'easeInOutBack',function() {
						
						setTimeout(function(){
							$('#resizable_calendar').removeAttr('style');
						},1000);
						
					});				
					
				}   	 
	
			}).bind( "resize", function(event, ui) {
			
				// can't figure out but 'resize' event works only this way :/
			
				datePickerTextSize();
		});
		
		}
		
		// nothing of the above is needed, really.
	
		$('#inline_datepicker').datepick({
	
			// this removes the style attribute on 'onShow' event; maybe there's a better way, but this is very fast
			
			onShow: function() { 
	
	        	$('.datepick').removeAttr('style'); 
	
	        	}
	
		});

		$('#monthsQuarterPicker').datepick({ 
		    monthsToShow: 3, monthsToStep: 3, monthsOffset: function(date) { 
		        return date.getMonth() % 3; 
		    }, showTrigger: '#calImg'});
	
		// end doc.ready			
	});

