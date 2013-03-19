<?php
/*
Plugin Name: Toolbar Publish Button
Plugin URI: http://wordpressuxsolutions.com
Description: Adds an copy of Update / Publish / Submit for Review / Save Changes button to the top Toolbar. You are no longer in need to scroll your admin page back and forth to edit and save any type of your posts, taxonomies, users or settings.
Version: 1.0.2
Author: WordPress UX Solutions
Author URI: http://wordpressuxsolutions.com
License: GPLv2 or later
*/



function wpuxss_tpb_admin_scripts() 
{	
	if ( is_admin() ) 
	{
		wp_enqueue_script(
			'toolbar-publish-button',
			plugins_url( '/tpb.js' , __FILE__ ),
			array('jquery')
		);
	}
}
add_action( 'admin_init', 'wpuxss_tpb_admin_scripts' );



function wpuxss_tpb_admin_styles()
{
	if ( is_admin() ) 
	{
		wp_register_style( 'wb-admin-custom-style', 
			plugins_url( '/admin.css' , __FILE__ ),
			array(), 
			'1.1', 
			'all' );
		wp_enqueue_style( 'wb-admin-custom-style' );
	}
}
add_action( 'admin_init', 'wpuxss_tpb_admin_styles' );

?>