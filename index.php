<!DOCTYPE <?php language_attributes( 'html' ); ?>>
<html lang="pt-br">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php bloginfo('name'); ?></title>
</head>
<?php wp_head(); ?>
<body>

<section class="container">
	<div class="row mt-5 align-items-center">
		<div class="col"></div>
		<div class="col-12 my-5">
			<figure class="text-center">
				<img width="100" src="<?php bloginfo( 'template_url' ); ?>/assets/images/logo-gulp.png" alt="">
			</figure>
			<h3 class="text-center text-white">Tema wordpress otimizado com gulp.</h3>
			<p class="text-center text-light opacity-5 my-0">gulp CLI v2.0.1 | bootstrap v4.0 | Sass</p>
		</div>
		<div class="col"></div>
	</div>
</section>

<?php wp_footer(); ?>
</body>
</html>