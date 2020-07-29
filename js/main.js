$(function () {	
/*Появление новых обектов при нажатие на кнопку js(jquery)*/ 
    $('.btn').click(function (e) {
    e.preventDefault();
    $('.innerclick').toggleClass('destinations-visible')
});
/*Появление новых обектов при нажатие на кнопку js(jquery)*/

/*Плавность скролинга якорных ссылок js(jquery)*/ 
$(".main-menu a, .btnright").click(function() {
    var elementClick = $(this).attr("href")
	event.preventDefault();
    var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
/*Плавность скролинга якорных ссылок js(jquery)*/

/*слайдер в блоке галерея сделано на js(jquery+slick) */
$('.galleryinner').slick();
/*слайдер в блоке галерея  сделано на js(jquery+slick)*/

/*слайдер в блоке отзывы  сделано на js(jquery+slick)*/
$('.reviewsinner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
/*слайдер в блоке отзывы  сделано на js(jquery+slick)*/
/* повление формы обратной связи при клике на кнопку на главном екране js(jquery) */
$('.btnleft').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.mymodal') 
    .css('display', 'block')
    .animate({opacity: 1}, 198);
  });
});
/* повление формы обратной связи при клике на кнопку на главном екране js(jquery) */


/* Появление окна с благодарностью при отправке данных в формах  js(jquery) */
$('.formbtn, .myformbtn').click( function(event){
  event.preventDefault();
  $('#myOverlay').fadeIn(297,	function(){
    $('.thank') 
    .css('display', 'block')
    .animate({opacity: 1}, 198);
  });
});
/* Появление окна с благодарностью при отправке данных в формах  js(jquery) */

/* Закрытие всех всплывающих окон на сайте  js(jquery) */
$('#myModal__close, #myOverlay, #mymod').click( function(){
$('.thank, .mymodal, .poplavanda, .popvata, .popchrom, .poples, .popmore, .popsad, .poprim, .popengland').animate({opacity: 0}, 198, function(){
    $(this).css('display', 'none');
    $('#myOverlay, #mymod').fadeOut(297);
  });
});
/* Закрытие всех всплывающих окон на сайте  js(jquery) */

/* Всплывающие окна для блока project js(jquery) */
$('#btnlavanda').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.poplavanda') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#btnvata').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.popvata') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#chrombtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.popchrom') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#lesbtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.poples') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#morebtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.popmore') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#sadbtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.popsad') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#rimbtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.poprim') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
$('#englandbtn').click( function(event){
  event.preventDefault();
  $('#mymod').fadeIn(297,	function(){
    $('.popengland') 
    .css('display', 'flex')
    .animate({opacity: 1}, 198);
  });
});
/* Всплывающие окна для блока project js(jquery) */
});


/*Смена текста на кнопке при клике чистый js */
const btn = document.querySelector('.btn > span');
btn.addEventListener('click', function() {
  btn.innerHTML =
    (btn.innerHTML === 'ПОКАЗАТЬ ВСЕ') ? btn.innerHTML = 'СКРЫТЬ' : btn.innerHTML = 'ПОКАЗАТЬ ВСЕ';
})
/*Смена текста на кнопке при клике чистый js */


