(function($) {
	
	$.fn.extend({
		
		duplicateButton: function ()
		{
			if ( $(this).length ) 
			{
				if ( $(this).is('.acf-button[type=submit]') && !$(this).attr('id') )
				{
					$(this).attr('id','acf_publish');
				}
				
				$('li#wp-admin-bar-new-content').after('<li id="wp-admin-bar-wpuxss-toolbar-publish-button"><a class="ab-item" rel="" href="#" id="top-toolbar-submit" for="' + $(this).attr('id') + '"><span class="ab-icon"></span>' + $(this).val() + '</a></li>');

				return true;
			}
			return false;
		}

	});
	
	
	function saveScrollTop ()
	{
		if (wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return == 1)
		{
			$.cookie("TPBScrollTop", $(window).scrollTop());
			$.cookie("TPBmessageDiv", $('div#message').length);
		}
	}


	$(function(ready)
	{
		if ( $('input[type="submit"].button-primary, .acf-button#publish').is(':visible') && !$('input[type="submit"].button-primary').is("#bulk_edit") )
		{
			$('input[type="submit"].button-primary, .acf-button#publish').duplicateButton();
		}

		$('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
		{		
			saveScrollTop();
			
			e.preventDefault();
			$('#'+$(this).attr('for')).click();
			
		});	
		
		$('.row-actions-visible .activate a, .row-actions-visible .deactivate a').click(function(e) 
		{		
			saveScrollTop();	
		});		
	});
	
	
	$(window).on("load resize",function(e)
	{
		if (wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return == 1) 
		{
			var tempScrollTop = $.cookie("TPBScrollTop");
			
			if (tempScrollTop) 
			{
				var prevMessageDiv = parseInt($.cookie("TPBmessageDiv"));
				var currMessageDiv = parseInt($('div#message').length);		
			
				if (!prevMessageDiv && currMessageDiv)
				{
					tempScrollTop = parseInt(tempScrollTop) + $('div#message').outerHeight(true);
				}
				
				$(window).scrollTop(tempScrollTop);
				$.cookie("TPBScrollTop",null);
				$.cookie("TPBmessageDiv",null);
			}
		}
		
		if (wpuxss_tpb_settings.wpuxss_tpb_fixed_menu == 1)
		{
			menuOuterHeight = $('#adminmenuwrap').height() + $('#wpadminbar').height();
			windowHeight = $(window).height();
			
			if ( windowHeight >= menuOuterHeight )
			{
				$('#adminmenuwrap').addClass('fixed_position');
			}
			else
			{
				$('#adminmenuwrap').removeClass('fixed_position');
			}
		}
	});

})( jQuery );