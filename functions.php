<?php 

function scripts() {
	// Variaveis
	$dir = get_template_directory_uri();
	$ver = rand(0,999);
	$jquery = array( 'jquery' );

	//style compilado
	wp_enqueue_style( 'style-scss', $dir.'/assets/css/style.min.css', false, $ver, 'all' );

	// bootstrap 4
	wp_enqueue_style( 'bootstrap-css', $dir.'/assets/css/bootstrap.css', false, $ver, 'all' );

	// google font
	wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900', false, $ver, 'all' );

	// bootstrap.js / popper.js / jquery
	wp_enqueue_script( 'bootstrap-js', $dir.'/assets/js/bootstrap.min.js', $jquery, false, true );
	wp_enqueue_script( 'popper-js', $dir.'/assets/js/popper.min.js', $jquery, false, true );
	wp_enqueue_script( 'jquery', $dir.'/assets/js/jquery.min.js', false, true );
}

add_action('wp_enqueue_scripts', 'scripts');
?>