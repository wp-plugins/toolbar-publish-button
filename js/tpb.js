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
		if ( $('input[type="submit"].button-primary, .acf-button#publish').is(':visible') && !$('input[type="submit"].button-primary').is("#bulk_edit") )
		{
			$('input[type="submit"].button-primary, .acf-button#publish').duplicateButton();
		}
		
		$('input[type="submit"].button-primary, .acf-button#publish, .row-actions-visible .activate a, .row-actions-visible .deactivate a').click(function(e) 
		{
			saveCookie();
		});

		$('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
		{			
			e.preventDefault();
			$('#'+$(this).attr('for')).click();
		});
	});
	
	
	$(window).on("load resize",function(e)
	{
		if (wpuxss_tpb_settings.wpuxss_tpb_scrollbar_return == 1) 
		{
			var tempScrollTop = parseInt($.cookie('TPBScrollTop'));
			
			if (tempScrollTop) 
			{
				var prevMessageDiv = parseInt($.cookie('TPBmessageDiv'));
				var currMessageDiv = parseInt($('div#message').length);		
			
				if (!prevMessageDiv && currMessageDiv)
				{
					tempScrollTop = tempScrollTop + $('div#message').outerHeight(true);
				}
				
				$(window).scrollTop(tempScrollTop);
				$.cookie('TPBScrollTop',null);
				$.cookie('TPBmessageDiv',null);
			}
			
			setTimeout( function(){
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