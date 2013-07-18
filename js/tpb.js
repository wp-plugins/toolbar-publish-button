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
	
	$(function(ready)
	{
		var wpuxss_tpb_scrollbar_return = wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return;
		
		if (wpuxss_tpb_scrollbar_return == 1) 
		{
			var tempScrollTop = $.cookie("TPBScrollTop");
			if (tempScrollTop) 
			{
				$(window).scrollTop(parseInt(tempScrollTop));
				$.cookie("TPBScrollTop",null);
			}
		}
		
		$('#publish, #submit, .acf-button[type=submit]').duplicateButton();
		
		$('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
		{		
			if (wpuxss_tpb_scrollbar_return == 1) $.cookie("TPBScrollTop", $(window).scrollTop());
			
			e.preventDefault();
			$('#'+$(this).attr('for')).click();
			
		});		
	});

})( jQuery );