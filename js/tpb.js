(function($) {
	
	$.fn.extend({
		
		duplicateButton: function ()
		{
			if ( $(this).length ) 
			{
				$('li#wp-admin-bar-new-content').after('<li id="wp-admin-bar-wpuxss-toolbar-publish-button"><a class="ab-item" rel="" href="#" id="top-toolbar-submit" for="' + $(this).attr('id') + '"><span class="ab-icon"></span>' + $(this).val() + '</a></li>');
				return true;
			}
			return false;
		}

	});
	
	
	function saveCookie ()
	{
		if (wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return == 1)
		{
			$.cookie('TPBScrollTop', $(window).scrollTop());
			$.cookie('TPBmessageDiv', $('div#message').length);
			
			if ( typeof window.safecss_editor !== 'undefined' )
			{
				var cursor = window.safecss_editor.selection.getCursor();
				$.cookie( 'TPBaceCurrentLineNumber', cursor[ 'row' ] );
				$.cookie( 'TPBaceTopLineNumber', window.safecss_editor.getFirstVisibleRow() );
			}
		}
	}
	

	$(function(ready)
	{
		var button = $('input[type="submit"].button-primary, input[type="button"].button-primary, input[type="submit"].acf-button');
		
		if ( button.is(':visible') && !button.is("#bulk_edit") ) 
		{
			if ( !button.attr('id') )
				button.first().attr('id','tpb_publish');
			button.first().duplicateButton();
		}
		
		button.add('.row-actions-visible .activate a, .row-actions-visible .deactivate a').click(function(e) 
		{
			saveCookie();
		});

		$('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
		{			
			e.preventDefault();
			$('#'+$(this).attr('for')).click();
		});
		
	});
	
	
	window.lastScrollTop = 0;
	$(window).on('scroll',function(e)
	{
		if (wpuxss_tpb_settings.wpuxss_tpb_fixed_menu == 1)
		{
			var menu = $('#adminmenuwrap');
			var toolbarHeight = $('#wpadminbar').height();
			var menuHeight = menu.height() + toolbarHeight;
			var windowHeight = $(this).height();
			var scrollHeight = $(document).height();
			
			if ( menuHeight < windowHeight )
				menu.css({'position':'fixed', 'z-index':20, 'top': toolbarHeight });
			else
			{
				var delta1 = menuHeight - windowHeight;
				var delta2 = scrollHeight - menuHeight;
				
				if ( $(this).scrollTop() > window.lastScrollTop )
				{
					if ( $(this).scrollTop() > delta1 )
						menu.css({'position':'fixed', 'z-index':20, 'top': toolbarHeight - delta1 });
					else
						menu.css({'position':'absolute', 'top':'auto'});
				}
				else
				{				
					if ( $(this).scrollTop() < delta2 )
						menu.css({'position':'fixed', 'z-index':20, 'top': toolbarHeight });
					else
						menu.css({'position':'absolute', 'top': delta2 });
				}
				window.lastScrollTop = $(this).scrollTop();
			}
		}
	});
	
	
	$(window).on('load',function(e)
	{
		if ( wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return == 1 ) 
		{
			var n = $('.acf_wysiwyg').length;

			setTimeout( function()
			{				
				var tempScrollTop = parseInt($.cookie('TPBScrollTop'));
				
				if (tempScrollTop) 
				{
					var prevMessageDiv = parseInt($.cookie('TPBmessageDiv'));
					var currMessageDiv = parseInt($('div#message').length);		
				
					if (!prevMessageDiv && currMessageDiv)
						tempScrollTop = tempScrollTop + $('div#message').outerHeight(true);
					
					$(window).scrollTop(tempScrollTop);
					$.cookie('TPBScrollTop',null);
					$.cookie('TPBmessageDiv',null);
				}
				
			}, 15*n);
			
			
			setTimeout( function()
			{
				var tempCurrentLineNumber = parseInt($.cookie('TPBaceCurrentLineNumber'));
				var tempTopLineNumber = parseInt($.cookie('TPBaceTopLineNumber'));
		    
				if ( tempTopLineNumber && tempCurrentLineNumber && typeof window.safecss_editor !== 'undefined' ) 
				{ 
					window.safecss_editor.gotoLine( tempCurrentLineNumber+1 );
					window.safecss_editor.scrollToLine( tempTopLineNumber+1, false, false, null );
					$.cookie( 'TPBaceCurrentLineNumber', null );
					$.cookie( 'TPBaceTopLineNumber', null );
				}
				
			}, 1);
			
		}
	});

})( jQuery );