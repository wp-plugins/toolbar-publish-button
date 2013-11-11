(function($) {

	function saveScrollbarCookie ()
	{
		$.cookie('TPBscrollTop', $(window).scrollTop());
		$.cookie('TPBmessageDiv', $('div#message').length);
		
		if ( typeof window.safecss_editor !== 'undefined' )
		{
			var cursor = window.safecss_editor.selection.getCursor();
			$.cookie( 'TPBaceCurrentLineNumber', cursor[ 'row' ] );
			$.cookie( 'TPBaceTopLineNumber', window.safecss_editor.getFirstVisibleRow() );
		}
	}
	
	
	function removeCookie ()
	{
		$.removeCookie( 'TPBaceCurrentLineNumber' );
		$.removeCookie( 'TPBaceTopLineNumber' );	
			
		$.removeCookie( 'TPBscrollTop' );
		$.removeCookie( 'TPBmessageDiv' );	
	}
	

	$(function(ready)
	{		
		var button = $('input[type="submit"].button-primary, input[type="button"].button-primary, input[type="submit"].acf-button');
		
		button.add('.row-actions-visible .activate a, .row-actions-visible .deactivate a').click(function(e) 
		{
			saveScrollbarCookie();
		});
	});
	
	
	$(window).on('load',function(e)
	{				
		window.tempCurrentLineNumber = $.cookie( 'TPBaceCurrentLineNumber' ) ? parseInt( $.cookie( 'TPBaceCurrentLineNumber' ) ) : 0;
		window.tempTopLineNumber = $.cookie( 'TPBaceTopLineNumber' ) ? parseInt( $.cookie( 'TPBaceTopLineNumber' ) ) : 0;		
		window.tempScrollTop = $.cookie( 'TPBscrollTop' ) ? parseInt( $.cookie( 'TPBscrollTop' ) ) : 0;
		window.prevMessageDiv = $.cookie( 'TPBmessageDiv' ) ? parseInt( $.cookie( 'TPBmessageDiv' ) ) : 0;
		window.n = $('.acf_wysiwyg').length;
	
		setTimeout( function()
		{				
			if ( window.tempScrollTop ) 
			{
				var currMessageDiv = parseInt($('div#message').length);		
			
				if (!window.prevMessageDiv && currMessageDiv)
					window.tempScrollTop = window.tempScrollTop + $('div#message').outerHeight(true);
				
				$(window).scrollTop(window.tempScrollTop);	
			}
		}, 15*window.n);
		
		setTimeout( function()
		{		    
			if ( window.tempTopLineNumber && window.tempCurrentLineNumber && typeof window.safecss_editor !== 'undefined' )
			{ 
				window.safecss_editor.gotoLine( window.tempCurrentLineNumber+1 );
				window.safecss_editor.scrollToLine( window.tempTopLineNumber+1, false, false, null );
			}
		}, 1);
			
		removeCookie();
	});

})( jQuery );