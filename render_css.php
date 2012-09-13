<?php

error_reporting(0);
session_start();

// Set default site to lmfaomusic
define(DEFAULT_SITE, 'lmfaomusic.com');

// Set work site to render css
if (isset($_GET['umg_site'])) {
  $work_site = $_GET['umg_site'];
  $_SESSION['umg_site'] = $work_site;
}
else if ($_SESSION['umg_site']) {
  $work_site = $_SESSION['umg_site'];
}
else {
  $work_site = DEFAULT_SITE;
}

// Adjust absolute site URL
$work_site_url = 'http://www.' . $work_site . '/';

// CSS URLs need to be inserted to default template
$css_urls = array(
	'default' => array(
		'theme' => 			$work_site_url . '_local/css/theme.css?v=' . rand(1, 99999),
	  'echo' => 			$work_site_url . '_local/css/echo.css?v=' . rand(1, 99999),
	  'sso_membership' => 	$work_site_url . '_local/css/sso_membership.css?v=' . rand(1, 99999),
	),
  'blink182.com' => array(
		'theme' => 			$work_site_url . '_local/css/theme2.css?v=' . rand(1, 99999),
	  'echo' => 			$work_site_url . '_local/css/echo2.css?v=' . rand(1, 99999),
	),
);

// First we pull in the local css file
$template_css_file = file_get_contents('umg-styles-template.css');

if ($css_urls[$work_site]) {
	$rendered_css_urls = array_merge($css_urls['default'], $css_urls[$work_site]);
}
else {
	$rendered_css_urls = $css_urls['default'];
}

foreach ($rendered_css_urls as $css_variable => $css_url) {
  $css_url_content = file_get_contents($css_url);

  $template_css_file = str_replace('{$partial_' . $css_variable . '}', $css_url_content, $template_css_file);
}

if (preg_match_all('/\([\'\"]?([\/\.].*?images.*?)[\'\"]?\)/', $template_css_file, $matches)) {
  $work_site_images_dir = dirname(__FILE__) . '/images/' . $work_site;
	
  if (!is_dir($work_site_images_dir)) {
    mkdir($work_site_images_dir, 0777);
  }

  foreach ($matches[1] as $css_image) {

  	// $image_url = $work_site_url . 'images/' . str_replace(array('\'', '"'), '', $css_image);
  	
  	if (strpos($css_image, '..') === 0) {
  		$image_url = $work_site_url . '_local/css/' . $css_image;
  	}
  	else {
  		$image_url = $work_site_url . $css_image;
  	}

  	$file_name = basename($css_image);
  	$file_headers = @get_headers($image_url);

	 	//print $image_url . ' - ' . $work_site_images_dir . '/' . $file_name . '<br/>';
  	if ($file_headers[0] == 'HTTP/1.1 200 OK' && !is_file($work_site_images_dir . '/' . $file_name)) {
  	  copy($image_url, $work_site_images_dir . '/' . $file_name);
  	}
  }
}
// header("Content-Type: text/css");
// print $template_css_file;
//we want to search for these strings and replace them with the strings bellow
$original_strings = array(
	// replacing images
	"/url\([\'\"]?[\/\.][^\)]*\/(.*?)[\'\"]?\)/",
	"/\#artist/",
	"/\.container/",
	"/\.span-8/",
	"/\#hd \.navigation/",
	"/\#top-nav .navigation li span/",
	"/\.navigation/",
	"/\#bd/",
	"/\#top-nav/",
	"/\#topbar/",
	"/\#ft /",
	"/\#ft,/",
	"/\.bg_nav/",
	"/h1\#logo/",
	"/\.pg-home/",
	"/\#hd/",
	"/li\.selected a/",
	"/li\.selected/",
	"/\.primary /",
	"/\.primary,/",
	"/h2\.s_channel_title/",
	/// "/\.s_channel a span/",
	"/\.secondary h1 a/",
	// right blocks
	"/\.secondary \.s_item li/",
	"/\.secondary \.s_headline a/",
	"/\.secondary a\:link, \.secondary a\:visited/",
	"/\.secondary/",
	"/\.s_byline/",
);

//We want to use these strings to replace the stings above
$replacement_strings = array(
	"url(images/" . $work_site . "/$1)",
	"body",
	".page-width",
	".sidebar-a",
	".menu",
	"#navigation .menu li a",
	".menu",
	"#content",
	"#navigation",
	"#navigation",
	"#copyright ",
	"#copyright,",
	"#header",
	"#site-name",
	".front",
	"#banner",
	"li a.active",
	"li a.active",
	"#main ",
	"#main,",
	".view-content > h3, h1#page-title, .middle > h2",
	"#site-name a",
	// right blocks
	".sidebar .view-content .views-row",
	".sidebar .view-content .views-row a",
	".sidebar a:link, .sidebar a:visited",
	".sidebar",
	".view-content .views-field-created",
);

$updated_css = preg_replace($original_strings, $replacement_strings, $template_css_file);


header("Content-Type: text/css");

print $updated_css;
