$(document).ready(function(){

// Site Types

// Cloud Blue
var siteType2 = function(){
	$('body').attr('id', 'siteType2');
}

// Light Green
var siteType3 = function(){
	$('body').attr('id', 'siteType3');
}

// Steady Blue
var siteType4 = function(){
	$('body').attr('id', 'siteType4');
}

// Red - Black
var siteType5 = function(){
	$('body').attr('id', 'siteType5');
}

// Green
var siteType6 = function(){
	$('body').attr('id', 'siteType6');
}

// Purple
var siteType7 = function(){
	$('body').attr('id', 'siteType7');
}

// Dark Blue - Brown
var siteType8 = function(){
	$('body').attr('id', 'siteType8');
}

// siteType8();

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

// Filter Search

if($('.search_filters').length > 0){

	$('.filter-items li').each(function(){
		var labelText = $(this).find('label').text().toLowerCase();
		$(this).find('label').attr('data-name',labelText);
	});

	$('.search_filters').on('keyup', function() {
		var searchVal = $(this).val().toLowerCase();
		var filterItems = $(this).parents('.filter-inner-box').find('li');

		if (searchVal != '') {
			filterItems.hide();
			$(this).parents('.filter-inner-box').find('label[data-name^="' + searchVal + '"]').parents('li').show();
		} else {
			filterItems.show();
		}
	});
}

// Nice Scroll

$(".filter-items, .category-listing ul").niceScroll({
  scrollbarid:'onlyScroll'
});

// Carousel Slider

$('.carousel-slider').masterslider({
    loop:true,
    width:232,
    height:280,
    speed:20,
    autoplay:false,
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
  items:1,
  nav:false,
  dots:true,
  autoplay:true,
  loop:true,
  margin:10,
  speed:20
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

// Mobile Functions

if($(window).width() < 980){

  // Sticky Header

  $('.header').addClass('fixed');

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 200);

  function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('.header').removeClass('nav-up').addClass('nav-down');
      }
    }
    
    lastScrollTop = st;
  }  

  // Search Button

  $('.search-bttn').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.search').removeClass('active');
      $('.header').removeClass('search-active');
    } else{
      $(this).addClass('active');
      $('.search').addClass('active');
      $('.header').addClass('search-active');
    }
  });

  // Carousel Items

  $('.has-carousel').owlCarousel({
    responsive: true,
    margin:4,
    nav:false,
    dots:true,
    autoplay: false,
    loop:true,
    items:1
  });

  // Static Sidebar

  $('.static-sidebar ul li.active a').on('click', function(){
    $(this).parents('.static-sidebar').toggleClass('active');
  });

}

if($(window).width() < 860){

  setTimeout(function(){
    $('.dashboard-tabs ul').animate({scrollLeft: 500}, 1000);
    $('span.draggable').css('margin-left', '-70px');
    setTimeout(function(){
      $('.dashboard-tabs ul').animate({scrollLeft: 0}, 1000);
      $('span.draggable').css('margin-left', '0');
      setTimeout(function(){
        $('span.draggable').addClass('is-hidden');
      },500);
    },1500);
  },500);

}

if($(window).width() < 740){
  
  $('.filter-bttn').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active').find('svg').attr('data-icon', 'filter');
      $('.filters').removeClass('active');
      $('body').removeClass('mobile-scrollable');
    } else{
      $(this).addClass('active').find('svg').attr('data-icon', 'times');
      $('.filters').addClass('active');
      $('body').addClass('mobile-scrollable');
    }
  });

}

});