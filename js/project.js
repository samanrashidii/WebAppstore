$(document).ready(function(){

// SVG Items

(function() {

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }
  
  function SVGButton( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this.init();
  }

  SVGButton.prototype.options = {
    speed : { reset : 800, active : 150 },
    easing : { reset : mina.elastic, active : mina.easein }
  };

  SVGButton.prototype.init = function() {
    this.shapeEl = this.el.querySelector( 'span.morph-shape' );

    var s = Snap( this.shapeEl.querySelector( 'svg' ) );
    this.pathEl = s.select( 'path' );
    this.paths = {
      reset : this.pathEl.attr( 'd' ),
      active : this.shapeEl.getAttribute( 'data-morph-active' )
    };

    this.initEvents();
  };

  SVGButton.prototype.initEvents = function() {
    this.el.addEventListener( 'mousedown', this.down.bind(this) );
    this.el.addEventListener( 'touchstart', this.down.bind(this) );

    this.el.addEventListener( 'mouseup', this.up.bind(this) );
    this.el.addEventListener( 'touchend', this.up.bind(this) );

    this.el.addEventListener( 'mouseout', this.up.bind(this) );
  };

  SVGButton.prototype.down = function() {
    this.pathEl.stop().animate( { 'path' : this.paths.active }, this.options.speed.active, this.options.easing.active );
  };

  SVGButton.prototype.up = function() {
    this.pathEl.stop().animate( { 'path' : this.paths.reset }, this.options.speed.reset, this.options.easing.reset );
  };

  [].slice.call( document.querySelectorAll( 'button.button--effect-1' ) ).forEach( function( el ) {
    new SVGButton( el );
  } );

  [].slice.call( document.querySelectorAll( 'button.button--effect-2' ) ).forEach( function( el ) {
    new SVGButton( el, {
      speed : { reset : 650, active : 650 },
      easing : { reset : mina.elastic, active : mina.elastic }
    } );
  } );

})();

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

// Carousel Slider

$('.carousel-slider').masterslider({
    loop:true,
    width:232,
    height:280,
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