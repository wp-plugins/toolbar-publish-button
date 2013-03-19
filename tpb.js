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
		$('#publish, #submit, .acf-button[type=submit]').duplicateButton();
		
		$('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
		{		
			e.preventDefault();
			$('#'+$(this).attr('for')).click();
		});		
	});

})( jQuery );