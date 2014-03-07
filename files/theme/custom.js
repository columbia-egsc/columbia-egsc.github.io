jQuery(function() {
	var $ = jQuery;

    $('#wsite-header-search-form input').css({'width': '0px', 'display': 'none'});
	$('#wsite-header-search-form').append( '<span class="wsite-search-cover"></span>');
	$('#header .wsite-search').css('border', '1px transparent');

	$('.wsite-search-cover').live('click', function(e){
		e.preventDefault();
		$('.wsite-menu-default').fadeOut('slow', function() {
			$('#header .wsite-search').css('border', '1px solid #fff');
			$('#wsite-header-search-form input').css({'display': 'block'});
			$('#wsite-header-search-form input').animate({width: '170px'}, 1000, function() {
				$(this).focus();
				$('.wsite-search-cover').remove();
			});
		});
	});


	$('#wsite-header-search-form input').live('blur', function(e) {
		$('#wsite-header-search-form input').animate({width: '0px'}, 1000, function() {
			$(this).css({'display': 'none'});
			$('#header .wsite-search').css('border', '1px transparent');
			$('.wsite-menu-default').fadeIn('slow');
			$('#wsite-header-search-form').append( '<span class="wsite-search-cover"></span>');
		});
	});

	$('#skip-to-content').on('click', function(e) {
		e.preventDefault();
		var $content = $('[name="' + $(this).attr('href').slice(1) + '"]');
		$('body,html').animate({
			scrollTop: $content.offset().top
		});
	});
});