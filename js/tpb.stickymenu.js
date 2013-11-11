(function($) {	
	
	function saveStickyMenuCookie ()
	{
		$.cookie( 'TPBmenuScrollTop', window.menuScrollTop );
	}
	
	function removeCookie ()
	{			
		$.removeCookie( 'TPBmenuScrollTop' );
	}
	
	$(function(ready)
	{		
		var button = $('input[type="submit"].button-primary, input[type="button"].button-primary, input[type="submit"].acf-button');
		
		button.add('.row-actions-visible .activate a, .row-actions-visible .deactivate a').click(function(e) 
		{
			saveStickyMenuCookie();
		});

		$('#adminmenuwrap, #adminmenuback').wrapAll('<div id="adminmenusuperwrap" />');
			
		window.lastScrollTop = 0;
		window.menuScrollTop = 0;
		window.prevMenuScrollTop = $.cookie( 'TPBmenuScrollTop' ) || 0;

		if ( $('body.mp6').length )
			window.menuWidth = parseInt($('#adminmenuwrap').width());
		else 
			window.menuWidth = parseInt($('#adminmenuwrap').width()) + 10;
			
		$('#adminmenusuperwrap').css({
			'position' : 'fixed',
			'z-index' : 20,
			'top' : $('#wpadminbar').height(),
			'height' : $(window).height() - $('#wpadminbar').height(),
			'width' : window.menuWidth,
			'overflow' : 'hidden'
		});
		
		$('#wpcontent').css({'z-index' : 10});
		$('#wpadminbar').prependTo('#wpwrap');
		
		$(document).on('mouseover', '#adminmenuwrap', function(e)
		{				
			$('#adminmenusuperwrap').width( $(window).width() );
		});
	
		$(document).on('mouseleave', '#adminmenuwrap', function(e)
		{
			$('#adminmenusuperwrap').width( window.menuWidth );
		});		
		
		$('#collapse-menu').click(function(e)
		{
			if ( $('body.mp6').length )
				window.menuWidth = parseInt($('#adminmenuwrap').width());
			else 
				window.menuWidth = parseInt($('#adminmenuwrap').width()) + 10;
				
			$('#adminmenusuperwrap').width( window.menuWidth );
			
			if ( $('#adminmenuwrap').height() > $(document).height() )
				$('#wpcontent').height($('#adminmenuwrap').height());
		});
	});
	
	$(window).on('load',function(e)
	{
		if ( $('#adminmenuwrap').height() > $(document).height() )
			$('#wpcontent').height($('#adminmenuwrap').height());

		removeCookie();
	});

	$(window).on('resize',function(e)
	{
		$('#adminmenusuperwrap').css({
			'height' : $(this).height() - $('#wpadminbar').height()
		});
		
		if ( $('#adminmenuwrap').height() > $(document).height() )
			$('#wpcontent').height($('#adminmenuwrap').height());
	});
	
	$(window).on('scroll',function(e)
	{		
		if ( window.prevMenuScrollTop )
		{
			$('#adminmenusuperwrap').scrollTop( window.prevMenuScrollTop );
			window.prevMenuScrollTop = 0;
		}
		else
			$('#adminmenusuperwrap').scrollTop( window.menuScrollTop + $(this).scrollTop() - window.lastScrollTop );
		
		window.menuScrollTop = $('#adminmenusuperwrap').scrollTop();			
		window.lastScrollTop = $(this).scrollTop();
		
		saveStickyMenuCookie();
	});


})( jQuery );