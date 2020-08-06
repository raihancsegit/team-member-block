<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 */
function team_member_block_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'team_member_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null, 
		null 
	);

	// Register block editor script for backend.
	wp_register_script(
		'team_member_block-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), 
		null,
		true 
	);

	// Register block editor styles for backend.
	wp_register_style(
		'team_member_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
		array( 'wp-edit-blocks' ), 
		null 
	);

	wp_enqueue_style(
		'fontawesome', 
		plugins_url( 'assets/css/fontawesome-all.min.css', 
		dirname( __FILE__ ) 
	));
	
	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'team_member_block-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 */
	register_block_type(
		'cgb/block-team-member-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'team_member_block-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'team_member_block-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'team_member_block-cgb-block-editor-css',
		)
	);

	wp_localize_script(
		'team_member_block-cgb-block-js',
		'atomic_globals',
		array(
			'rest_url'      => esc_url( rest_url() ),
			'user_data'     => $user_data,
			'is_wpe'        => function_exists( 'is_wpe' ),
		)
	);
	
}


// Hook: Block assets.
add_action( 'init', 'team_member_block_cgb_block_assets' );
