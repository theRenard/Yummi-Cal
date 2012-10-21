#Yummical Theme for Keith Wood jQuery datepick™  
***
*Author:* Gummibearlab  
*Created:* 20/09/2012  
*Version:* 1.0  
*Datepick: http://keith-wood.name/datepick.html*
**
***

***
##Table of Contents
1. LESS + CSS Files
2. Javascript snippets
3. Browser Compatibility

##1. LESS + CSS Files
There are 1 LESS and 1 CSS files in this theme; the LESS file it's easier to customize, the CSS file is easier to work with. 
Your choice.

 
##2. Javascript Files
There are 2 Javascript snippets in this theme:
 
* datePickerTextSize();
* $('.datepick').removeAttr('style'); 
 
 
 
#####datePickerTextSize();

	this function is very easy to implement, you should call it everytime you need to set the font size, like on $(document).ready(); and/or on $(window).resize();
	
	If you need to set it on every window resize, then you this event https://github.com/louisremi/jquery-smartresize.

	function datePickerTextSize() {
	
		var fontRatio = 0.050;
		
		$('.myDatepick').each(function() {
			var datepicker = $(this).find('.datepick'),
			datepickerWidth = datepicker.width(),
			newFontSize = parseInt(datepickerWidth * fontRatio);
	
			$(this).css({'font-size' : newFontSize});

		});
	}

#####$('.datepick').removeAttr('style'); 

	with this snippet you remove a style attribute used on the old CSS datepick basic theme. Leaving the style will cause a mess with my 100% width. 
	
	Usage is very simple, just remove style attribute on onShow event.
	
		$('.myDatepick').datepick({
				
			onShow: function() { 
	
	        	$('.datepick').removeAttr('style'); 
	
	        }
	
		});	
	

***

##3. Browser Compatibility
This theme works well (-) or great (X) in the following browsers:
 
**IE 6-8** (not tested)  
**IE 9+** -  
**Chrome** X  
**Firefox** -  
**Safari** X  
**Opera** -
***