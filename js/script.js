// even pada saat link di klik
$('.page-scroll').on('click', function(){
	var tujuan = $(this).attr('href');
	var elemenTujuh = $(tujuan);
	$('body').animate({
		scrollTop: elemenTujuh.offset().top - 50
	}, 1000, 'easeInOutExpo');	

});
