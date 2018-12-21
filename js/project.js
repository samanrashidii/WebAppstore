$(document).ready(function(){

// Counter Up

$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

// Sticky Sidebar

if($(window).width() > 1200 && $('.sidebar').length > 0){
    $('.sidebar-inside').sticky({
        parent: '.main-content',
        top: 120,
        bottom: 20
    });
}

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
        arrows : {autohide:false},
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

});