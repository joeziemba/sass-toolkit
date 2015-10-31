$(document).ready(function() {
	

	var modal = function(command, contentId){
		if(command === 'open'){
			var content = $(contentId).html();
			$('.modal-content').html(content);
			$('.modal-wrapper').fadeIn(function(){
				$('body').addClass('modal-on');
			});
		} else{
			$('.modal-wrapper').fadeOut(function(){
				$('body').removeClass('modal-on');
			});
		}
	}

	$('.js-modal-open').on('click', function(){
		modal('open');
	});

	$('.js-modal-default').on('click', function(){
		modal('open', '#modal-default');
	});

	$('.js-modal-logout').on('click', function(){
		modal('open', '#modal-content-logout');
	});

	$('.js-modal-close').on('click', function(){
		modal();
	});
});