$(document).ready(function(){

// Operating Systems

$('.operating-systems a').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});

// Sticky Sidebar

if($(window).width() > 1200 && $('.sidebar').length > 0){
    $('.sidebar-inside').sticky({
        parent: '.main-content',
        top: 120,
        bottom: 20
    });
}

// Carousel Items

$('.carousel-slider').masterslider({
    loop:true,
    width:150,
    height:150,
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

});