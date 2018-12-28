$(document).ready(function(){

// Categories

$('.categories-bttn').on('click', function(){
	$('.categories').addClass('active');
	$('body').addClass('mobile-scrollable');
});

$('.categories, .categories a.close').on('click', function(){
  $('.categories').removeClass('active');
  $('body').removeClass('mobile-scrollable');
});

$('.categories-inner').on('click', function(e){
  e.stopPropagation();
});

$('.categories-tab a').on('click', function(e){
	e.preventDefault();
	var hrefTarget = $(this).attr('href');
	$(this).addClass('active').siblings().removeClass('active');
	$(hrefTarget).fadeIn().siblings().hide();
});

// Counter Up

$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

// Sticky Sidebar

if($(window).width() > 1200 && $('.static-sidebar').length > 0){
    $('.static-sidebar ul').sticky({
        parent: '.main-content',
        top: 120,
        bottom: 20
    });
}

$('.static-sidebar li.active a').on('click', function(e){
	e.preventDefault();
});

// Accordion

$(function() {
  $('.accordion').accordion({collapsible : true, active : 'none'});
});

// Filter Boxes

$('.filter-title').on('click', function(){
  $(this).toggleClass('active').siblings('.filter-inner-box').fadeToggle();
});

// Add to Wishlist

$('.add-to-wishlist').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).find('svg').attr('data-prefix', 'far');
	} else{
		$(this).addClass('active');
		$(this).find('svg').attr('data-prefix', 'fas');
	}
});

// Comment Options

$('.comment-options a').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).find('svg').attr('data-prefix', 'far');
	} else{
		$(this).addClass('active');
		$(this).find('svg').attr('data-prefix', 'fas');
	}
});

// Star Rating

$('.your-rating span').on('mouseenter', function(){
  if(!$(this).parents('.your-rating').hasClass('selected')){
    $(this).prevAll().addClass('active');
    $(this).addClass('active').nextAll().removeClass('active');
  }
}).on('click', function(){
  $(this).addClass('selected').nextAll().removeClass('selected');
  $(this).prevAll().addClass('selected');
  $('.your_rating_number').val($('.your-rating span.selected').index(this)+1);
});

$('.your-rating').on('mouseleave', function(){
  $(this).children('span').removeClass('active');
});

// Show More

$('.show-more a').on('click', function(){
  if($(this).hasClass('active')){
		$(this).removeClass('active').parent().prev('.show-content').removeClass('active');
		$(this).html('مشاهده بیشتر');
	} else{
		$(this).addClass('active').parent().prev('.show-content').addClass('active');
		$(this).html('مشاهده کمتر');
	}
});

// Carousel Slider

$('.carousel-slider').masterslider({
    loop:true,
    width:180,
    height:230,
    speed:20,
    autoplay:true,
    view:'flow',
    preload:0,
    space:10,
    wheel:false,
    controls : {
        arrows : {autohide:false}
    }
});

// Carousel Items

$('.carousel-items').owlCarousel({
  autoWidth:true,
  items:6,
  nav:true,
  dots:false,
  autoplay:false,
  loop:false,
  margin:0,
  responsive:{
      600:{}
  }
});

// App Gallery

$('.app-gallery').owlCarousel({
  autoWidth:true,
  items:3,
  nav:true,
  dots:false,
  autoplay:false,
  loop:true,
  margin:0,
  responsive:{
      600:{}
  }
});

// Slider //

$('.blog-slider').masterslider({
    width:1920,
  	height:700,
    fullwidth:true,
    autoplay:true,
    loop:true,
    view:'flow',
    speed:16,
    view:'fade',
    controls : {
        bullets: {autohide:false}
    }
});

});