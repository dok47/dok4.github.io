
$(function () {

	/*появление новых елементов*/
	$('.btn-routes').click(function (e) {
		e.preventDefault();
		$('.destinations-more').toggleClass('destinations-visible')
		
	});

/*появление новых елементов*/
/*плавность скролинга якорных ссылок меню*/
$(".nav a, .btn-of, .arrow, .routes a").click(function() {
    var elementClick = $(this).attr("href")
	event.preventDefault();
    var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
/*плавность скролинга якорных ссылок меню*/

/*всплывающая форма */
	$('a.btn').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#decor') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#decor').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

/*всплывающая форма */

/*потверждение отправки на формах*/
  $('#mymodalbtn, #formbtn').click(function(){
	swal("Отправлено!", "Наш менеджер свяжется с вами!", "success");

});
  /*потверждение отправки на формах*/



});



