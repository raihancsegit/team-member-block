<?php
/**
 * Plugin Name: Team Member Gutenberg
 * Plugin URI: https://wordpress.org/plugins/team-member-gutenberg
 * Description: Team Members Blocks is clean and easy to use team members plugin. You can display your team members anywhere on your website within less than 5min.
 * Author: Keendevs
 * Author URI: https://keendevs.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
