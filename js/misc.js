//Change the text of the Previous/Next buttons.
(function($) {
	$('li.pager-next a').html('Next »');
	$('li.pager-previous a').html('« Prev');

//Add a second pager at the top of the page
var viewType = null;
if ($('body.page-music').size() > 0) {
	var viewType = 'music';
}
else if ($('body.page-news').size() > 0) {
	var viewType = 'news';
}

if (viewType != null) {
	$('div.view-' + viewType + '.view-display-id-page div.item-list')
	.clone()
	.prependTo('div.view-' + viewType + '.view-display-id-page');
}

})(jQuery);

