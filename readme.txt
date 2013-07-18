=== Toolbar Publish Button ===
Contributors: webbistro
Tags: ux, user experience, wp-admin, admin, publish, toolbar, save, button, update, post, page, user profile, settings, scrollbar, scrolling, admin bar, backend
Requires at least: 3.0
Tested up to: 3.5.2
Stable tag: 1.1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


Get rid of excessive scrolling when saving data on the WordPress backend! A small UX improvement will always keep Publish Button in sight.



== Description ==

Too often it turns out very inconvenient to scroll WordPress admin page back and forth in the quest for a big blue button in order to save latest changes. 

Simple jQuery script of this plugin will duplicate Update / Publish / Save Changes / etc. button for posts, pages, custom posts, taxonomies, user profiles and settings to the top WordPress admin bar menu so, that it is staying on the site when you are scrolling your admin page. 

The plugin doesn't affect any native WordPress functionality. It just redirects your click to an original button. The plugin, also, uses current button text, of course with the current language.



== Installation ==

1. Upload 'toolbar-publish-button' to the '/wp-content/plugins/' directory

2. Activate the plugin through the 'Plugins' menu in WordPress admin

3. Change "Remember scrollbar position" option on the plugin Options page if you wish

4. Enjoy the clone of the Update / Publish button on the Toolbar when editing posts, pages and custom post types.


== Frequently Asked Questions ==

There are no questions for now :)



== Screenshots ==

1. Toolbar Publish Button Options Page

2. When the Publish Button can be helpful



== Changelog ==

= 1.1.2 =
* Scrollbar inaccurate position calculation fixed
* The plugin admin texts localization mechanism implemented. (Note: Frontend doesn't need to be localized because it uses the current text (and language) of the button via javascript)

= 1.1.1 =
* Minor improvement of plugin upgrade process

= 1.1.0 =
* Remember scrollbar position option added

= 1.0.4 =
* Script moved to the footer for better site performance.

= 1.0.3 =
* Minor improvements.

= 1.0.2 =
* ACF plugin Option Page button support added.

= 1.0.1 =
* Minor bugs fixing.

= 1.0.0 =
* Toolbar Publish Button.