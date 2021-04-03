$(document).ready(function()
{
	$('.page-scroll').on('click', function(){
		var tujuan = $(this).attr('href');
		// tangkap elemen ybs
		var elemenTujuan = $(tujuan);

		// pindahkan scroll
		$('body').animate({
			scrollTop: elemenTujuan.offset() 
		}, 1250, 'swing');
		// jquery easing
		
		// console.log(elemenTujuan.offset().top);
	})
	//even pada saat link di clik
});

//even pada saat link di klik





