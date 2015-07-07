(function($) {
	
	$.fn.extend({
		
		duplicateButton: function ()
		{
			if ( $(this).length ) 
			{
                var content = '<li id="wp-admin-bar-wpuxss-toolbar-publish-button"><a class="ab-item" href="#" id="top-toolbar-submit" for="' + $(this).attr('id') + '"><span class="ab-icon"></span><span class="ab-label">' + $(this).val() + '</span></a></li>';
                
                if ( $('#wp-admin-bar-new-content').length ) 
                    $('#wp-admin-bar-new-content').after( content );
                else
                    $('.ab-top-menu').append( content );

				return true;
			}
			return false;
		}
		
	});

    var button = $('input[type="submit"].button-primary, input[type="button"].button-primary, input[type="submit"].acf-button');
    
    if ( ! button.is( '#bulk_edit' ) ) 
    {
        if ( ! button.attr( 'id' ) )
            button.first().attr( 'id','tpb_publish' );
        button.first().duplicateButton();
    }
    
    $('li#wp-admin-bar-wpuxss-toolbar-publish-button a').click(function(e) 
    {
        e.preventDefault();
        $('#'+$(this).attr('for')).click();
    });		

})( jQuery );