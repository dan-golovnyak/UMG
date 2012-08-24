<?php
error_reporting(0);

//First we pull in the local css file
$css_file = file_get_contents('umg-styles.css');

//we want to search for these strings and replace them with the strings bellow
$original_strings = array(
	"/\.container/",
	"/\.span-8/",
	"/\.navigation/",
	"/\#bd/",
	"/\#top-nav/",
	"/\#ft /",
	"/\.bg_nav/",
	"/h1\#logo/",
	"/\.pg-home/",
	"/\#hd/",
	"/li.selected a",
	"/li.selected",
	"/\.primary "

);

//We want to use these strings to replace the stings above
$replacement_strings = array(
	".page-width",
	".sidebar-a",
	".menu",
	"#content",
	"#navigation",
	"#copyright",
	"#header",
	"#site-name",
	".front",
	"#banner",
	"li a.active",
	"li a.active",
	"#main "

);

$new_css = preg_replace($original_strings, $replacement_strings, &$css_file);

print $new_css;