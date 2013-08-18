=== Toolbar Publish Button ===
Contributors: webbistro
Tags: ux, user experience, wp-admin, admin, publish, toolbar, save, button, update, post, page, user profile, settings, scrollbar, scrolling, admin bar, backend, admin menu, sticky
Requires at least: 3.3
Tested up to: 3.6
Stable tag: 1.2.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


Get rid of excessive scrolling when saving data on WordPress backend! A small UX improvement will keep Publish Button and/or Main Admin Menu in sight.



== Description ==

Too often it turns out very inconvenient to scroll WordPress admin page back and forth in the quest for a big blue button to save latest changes. 

Simple jQuery script of this plugin will duplicate Update / Publish / Save Changes / etc. button for posts, pages, custom posts, taxonomies, user profiles and settings to the top WordPress admin bar menu so, that it is staying on site when you are scrolling your admin page. 

The plugin options allow to keep scrollbar position after saving and stick admin main menu on its place when you're scrolling the page.

The plugin doesn't affect any native WordPress functionality. It just redirects your click to an original button. The plugin, also, uses current button text, of course with the current language.



== Installation ==

1. Upload plugin folder to the '/wp-content/plugins/' directory

2. Activate the plugin through the 'Plugins' menu in the WordPress admin

3. Change settings on Settings -> Toolbar Publish Button if you wish

4. Enjoy the clone of the Update / Publish button on the Toolbar when editing posts, pages and custom post types.



== Screenshots ==

1. Toolbar Publish Button Options Page

2. When the Publish Button can be helpful



== Changelog ==

= 1.2.0 =
* Update: Huge sticky admin menu behavior improvement: menu is scrollable only within its own height if it doesn't fit into browser window height. Just try it :)
* Update: Minor js code improvements.

= 1.1.7 =
* New:    "Remembers" scrollbar position for Jetpack custom CSS editor.
* Bugfix: Corrected mechanism of choosing a button for cloning.
* Bugfix: Native button can also "remember" scrollbar position from now.
* Update: Sticky main menu changes its behavior after browser window resize to match new dimensions.

= 1.1.6 =
* New:    Capability to remember a scrollbar position of the plugin list page after Activate/Deactivate button click added. It will work when Remember scrollbar position option is selected.
* Bugfix: Fixed menu CSS minor bug fixed.

= 1.1.5 =
* Bugfix: Script versions mechanism fixed. Please upgrade the plugin especially in case you can't see the changes from version 1.1.4

= 1.1.4 =
* Update: Main menu fixation mechanism improved. From now main menu won't be sticked if it doesn't fit into one screen automatically, no need to turn it off manually. Thanks MP6 for inspiration.

= 1.1.3 =
* New:    "Stick main menu" option added.
* Bugfix: Minor text correction done.

= 1.1.2 =
* New:    The plugin admin texts localization mechanism implemented. (Note: Frontend doesn't need to be localized because it uses the current text (and language) of the button via javascript).
* Bugfix: Inaccurate scrollbar position calculation fixed.

= 1.1.1 =
* Update: Minor improvement of plugin upgrade process.

= 1.1.0 =
* New:    "Remember scrollbar position" option added.

= 1.0.4 =
* Update: Script moved to the footer for better site performance.

= 1.0.3 =
* Update: Minor improvements.

= 1.0.2 =
* New:    ACF plugin Option Page button support added.

= 1.0.1 =
* Bugfix: Minor bugs fixing.

= 1.0.0 =
* New:    Toolbar Publish Button initial release.



== TO DO ==
* Full compatibility with MP6