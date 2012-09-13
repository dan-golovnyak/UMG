jQuery(document).ready(function() {
	var __themes = [
		'lmfaomusic.com',
		'eminem.com',
		'50cent.com',
		'drdre.com',
		'fergie.com',
		'blink182.com'
		// 'ladygaga.com', 
		// 'eminem.com', 
		// 'mindlessbehavior.com', 
		// 'lmfaomusic.com', 
		// 'blink182.com', 
		// 'mgklaceup.com', 
		// 'snowpatrol.com', 
		// '50cent.com', 
		// 'riseagainst.com', 
		// 'nodoubt.com', 
		// 'ilvolomusic.com', 
		// 'phillipphillips.com', 
		// 'drdre.com', 
		// 'omggirlz.com', 
		// 'robinthicke.com', 
		// 'fareastmovement.com', 
		// 'nellyfurtado.com', 
		// 'maryjblige.com', 
		// 'theprettyreckless.com', 
		// 'greyson-official.com ',
		// 'miauk.com', 
		// 'nicolescherzingermusic.com', 
		// 'scottymccreery.com', 
		// 'lifehousemusic.com', 
		// 'jojoonline.com', 
		// 'frankandderol.com', 
		// 'allamericanrejects.com', 
		// 'girlsgenerationusa.com', 
		// 'fergie.com', 
		// 'pcdmusic.com', 
		// 'haleyreinhart.com', 
		// 'keyshiacole.com', 
		// 'laurenalainaofficial.com', 
		// 'comptongame.com', 
		// 'jessicasanchezofficial.com', 
		// 'piatoscanoofficial.com', 
		// 'timbalandmusic.com', 
		// 'kerihilson.com', 
		// 'frenchmontanamusic.com', 
		// 'skylargreymusic.com', 
		// 'tvontheradio.com', 
		// 'midnightred.com', 
		// 'badmeetsevil.net', 
		// 'diddydirtymoney.com', 
		// 'nataliakills.com', 
		// 'evasimons.com', 
		// 'kendricklamar.com', 
		// 'ryeryemusic.com', 
		// 'matthewkoma.com', 
		// 'esterdean.com', 
		// 'blacktidemusic.com', 
		// 'azealiabanks.com', 
		// 'lloydmusic.com', 
		// 'laurenbennett.com', 
		// 'revtheory.com', 
		// 'destineeandparis.com', 
		// 'colettecarr.com', 
		// 'chelseawilliams.com', 
		// 'kaylabrianna.com', //+
		// 'jrandmusic.com', 
		// 'sonsofsylvia.com', 
		// 'weareserenades.com', 
		// 'freesolmusic.com', 
		// 'zanderbleck.com', 
		// 'blaqstarrmusic.com', 
		// 'mrdontrip.com', 
		// 'lilplayy.com', 
		// 'red-cafe.com', 
		// 'theshavingkit.com', 
		// 'slaughterhousemusic.com', 
		// 'crystalnicoleworld.com',
		// 'alex242.com', 
		// 'iamkinglos.com',
		// 'ladiesloverance.com', 
		// 'theknux.com'
	];
	var themes_div = jQuery('<div id="umg_themes"><a class="dropdown" href="javascript:void(0)">SITES</a></div>');

	if (__themes) {
		themes_div.append('<ul class="flyoutMenu" id="utNav"></ul>');

		jQuery.each(__themes, function(index, value) { 
		  themes_div.find('ul').append('<li><a href="javascript:void(0)" data="' + value + '">' + value + '</a></li>')
		});
	}

	jQuery('body').append(themes_div);

	window.setTimeout(function() {
		jQuery('#umg_themes ul li a').click(function(){
			var site = jQuery(this).attr('data');
			jQuery('link.dev_css_link').remove();
		  devIncludeCss(site);
		});

		jQuery('#umg_themes').addClass('dropdown').hover(function(){
		  jQuery(".flyoutMenu").show();
		}, function(){
		  jQuery(".flyoutMenu").hide();
		});
	}, 2000);
})
