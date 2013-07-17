<?php
/*
Plugin Name: Toolbar Publish Button
Plugin URI: http://wordpressuxsolutions.com
Description: Get a copy of Update / Publish / Submit for Review / Save Changes button to the top Toolbar! There is no longer need to scroll admin pages up and down to edit and save any type of your posts, taxonomies, users or settings.
Version: 1.1.1
Author: WordPress UX Solutions
Author URI: http://wordpressuxsolutions.com
License: GPLv2 or later


Copyright 2013  WordPress UX Solutions  (email : WordPressUXSolutions@gmail.com)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as 
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/



/**
 *  Load plugin text domain
 *
 *  @since		1.1.0
 *  @created	15/07/13
 */

load_plugin_textdomain('toolbar-publish-button', false, basename( dirname( __FILE__ ) ) . '/languages' );


/**
 *  wpuxss_tpb_admin_scripts
 *
 *  @since		1.0.2
 *  @created	30/03/13
 */
 
add_action( 'admin_init', 'wpuxss_tpb_admin_scripts' );
function wpuxss_tpb_admin_scripts() 
{	
	// update actions
	$version = "1.1.1";
	$old_version = get_option('wpuxss_tpb_version', false);

	if( $version != $old_version )
	{
		update_option('wpuxss_tpb_version', $version );
		
		if (!$old_version || $old_version < '1.1.0') 
		{
			wpuxss_tpb_on_activation();
		}
	}
	
	// styles for button
	wp_register_style( 
		'wb-admin-custom-style', 
		plugins_url( '/css/admin.css' , __FILE__ ),
		array(), 
		'1.1', 
		'all' );
	wp_enqueue_style( 'wb-admin-custom-style' );
	
	// jquery cookie to save scroll bar position
	wp_enqueue_script(
		'jquery-cookie',
		plugins_url( '/js/jquery.cookie.js' , __FILE__ ),
		array('jquery'),
		null,
		true
	);
	
	// plugin script
	wp_enqueue_script(
		'toolbar-publish-button-script',
		plugins_url( '/js/tpb.js' , __FILE__ ),
		array('jquery','jquery-cookie'),
		null,
		true
	);
	
	// register wp plugin settings
	register_setting( 
		'wpuxss_tpb_settings', //option_group
		'wpuxss_tpb_settings', //option_name
		'wpuxss_tpb_settings_validate' //sanitize_callback
	);
	
	// add section to plugin settings page
	add_settings_section(
		'wpuxss_tpb_main_section', //ID 
		__('Basic Settings'), //title 
		'', //callback
		'toolbar-publish-button-settings' //page
	);	
	
	// add setting field to the section on the plugin settings page
	add_settings_field(
		'wpuxss_tpb_scrollbar_return', //ID 
		__('Remember scrollbar position'), //title 
		'', //callback
		'toolbar-publish-button-settings', //page
		'wpuxss_tpb_main_section' //section			
	);
	
	// variable wpuxss_tpb_settings to pass plugin settings to jquery
	$options = get_option('wpuxss_tpb_settings');
	wp_localize_script( 
		'toolbar-publish-button-script', 
		'wpuxss_tpb_settings', 
		$options 
	);		
}


/**
 *  wpuxss_tpb_admin_menu
 *
 *  Add plugin settings page
 *
 *  @since		1.1.0
 *  @created	15/07/13
 */

add_action('admin_menu', 'wpuxss_tpb_admin_menu');
function wpuxss_tpb_admin_menu() 
{
	add_options_page( 
		__('Toolbar Publish Button Settings','toolbar-publish-button'), //page_title
		__('Toolbar Publish Button','toolbar-publish-button'), //menu_title
		'manage_options', //capability
		'toolbar-publish-button-settings', //page
		'wpuxss_tpb_print_options' //callback
	);
}


/**
 *  wpuxss_tpb_print_options
 *
 *  Print plugin options page
 *
 *  @type		callback function
 *  @since		1.1.0
 *  @created	15/07/13
 */

function wpuxss_tpb_print_options() 
{
	?>  
    
	<div id="toolbar-publish-button-settings-wrap" class="wrap">    
    	<?php screen_icon(); ?>
        <h2>Toolbar Publish Button Settings</h2>   
        
        <div id="poststuff">
        	<div id="post-body" class="metabox-holder columns-2">

                <div id="postbox-container-2" class="postbox-container">
                	<div class="postbox">
                        <form method="post" action="options.php">
                            <?php settings_fields( 'wpuxss_tpb_settings' ); ?>
                            
                            <h3>Basic Settings</h3>
                            
                            <div class="inside">
                            
                                <ul class="wpuxss_tpb_settings_list">
                                
                                    <li>
                                        <?php $options = get_option('wpuxss_tpb_settings'); ?>
                                        <input id="wpuxss_tpb_scrollbar_return" name="wpuxss_tpb_settings[wpuxss_tpb_scrollbar_return]" type="checkbox" value="1" <?php checked( '1', $options['wpuxss_tpb_scrollbar_return'] ); ?> />
                                        <label>
                                            Remember scrollbar position<br />
                                            <span>It will return admin page scroll bar to the position that preceded the click of the Save/Update button</span>
                                        </label>
                                    </li>
                                    
                                </ul>
                                
                                <?php submit_button(); ?>
                            
                            </div>

                        </form>
                    </div>
                </div>
                
                <div id="postbox-container-1" class="postbox-container">
                    <div class="postbox">
                        
                        <h3>Toolbar Publish Button 1.1.0</h3>
                        
                        <div class="inside">
                        
                            <h4>Changelog</h4>
                            <p>What's new in <a href="http://wordpress.org/plugins/toolbar-publish-button/changelog/">version 1.1.0</a>.</p>
                            
                            <h4>Support</h4>
                            <p>Feel free to ask for support on the <a href="http://wordpress.org/support/plugin/toolbar-publish-button/">wordpress.org</a> or on the <a href="http://wordpressuxsolutions.com/support/">plugin website</a>.</p>
                            
                            <h4>Plugin raiting</h4>
                            <p>Please <a href="http://wordpress.org/support/view/plugin-reviews/toolbar-publish-button/">vote for the plugin</a>. Thanks!</p>
                            
                            <div class="author">
                                <span><a href="http://wordpressuxsolutions.com/" target="_blank">WordPress UX Solutions</a> by <a class="logo-webbistro" href="http://twitter.com/webbistro" target="_blank"><span class="icon-webbistro">@</span>webbistro</a></span>
                            </div>
                        
                        </div>
    
                    </div>
                </div>
            
        	</div>
        </div>
	</div>
    
    
    
	<?php
}


/**
 *  wpuxss_tpb_settings_validate
 *
 *  @type		callback function
 *  @since		1.1.0
 *  @created	15/07/13
 */ 
 
function wpuxss_tpb_settings_validate($input)
{
	if(isset($input['wpuxss_tpb_scrollbar_return']))
		$input['wpuxss_tpb_scrollbar_return'] = 1;
	else
		$input['wpuxss_tpb_scrollbar_return'] = 0;
		
	return $input;
}


/**
 *  wpuxss_tpb_on_activation
 *
 *  Set default value for plugin setting during plugin activation
 *
 *  @since		1.1.0
 *  @created	15/07/13
 */ 

register_activation_hook(  __FILE__, 'wpuxss_tpb_on_activation' );
function wpuxss_tpb_on_activation() 
{
	$wpuxss_tpb_settings = array(
		'wpuxss_tpb_scrollbar_return' => 1
	);
	update_option( 'wpuxss_tpb_settings', $wpuxss_tpb_settings );	
}


/**
 *  wpuxss_tpb_settings_links
 *
 *  Add settings link to the plugin action links
 *
 *  @since		1.1.0
 *  @created	15/07/13
 */ 
 
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'wpuxss_tpb_settings_links' );
function wpuxss_tpb_settings_links( $links ) 
{
	return array_merge(
		array(
			'settings' => '<a href="' . get_bloginfo( 'wpurl' ) . '/wp-admin/options-general.php?page=toolbar-publish-button-settings">Settings</a>'
		),
		$links
	);
}


?>