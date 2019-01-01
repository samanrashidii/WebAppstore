$(document).ready(function(){
// ** Document Ready Started **

// Test Function //

var Testing = function(testText){
  console.log(testText);
}

// Get the Current Year //

var thisYear = new Date().getFullYear();
$('.current-year').html(thisYear);

// Textarea Character Left //

var charLeft;

$('.textarea-word-tracker textarea').on('keyup load', function () {
  charLeft = 250 - $(this).val().length;
  if (charLeft < 0) {
    charLeft = 0;
  }
  $(this).siblings('span').text(charLeft);
});

$(window).load( function() {
  $('.textarea-word-tracker textarea').each( function () {
    charLeft = 250 - $(this).val().length;
    $(this).siblings('span').text(charLeft);    
  });
});

// Static Content ol li number //

$(window).load(function(){
  var StaticliNumber = $('.static-content ol li').length;
  for(var i = 1; i <= StaticliNumber; i++){
    $('.static-content ol li:nth-child('+i+')').attr('list-number', i+' -');
  }
});

// Number Bullet //

$(window).load(function(){
  var liNumber = $('.number-bullet li').length;
  for(var i = 1; i <= liNumber; i++){
    $('.number-bullet li:nth-child('+i+')').attr('list-number', i+' -');
  }
});

// Switch Button //

$('.switch').on('click', function(){
  $(this).toggleClass('active');
});

// Nav Toggle //

$('.nav-toggle').on('click', function(){
  $(this).toggleClass('active');
});

// Remove Button //

$('a.remove:not(.different-remove)').on('click', function(){
  $(this).parent().remove();
});

// Close Button //

$('a.close:not(.overlay-close):not(.different-close)').on('click', function(){
  $(this).parent().hide();
});

// Overlay //

function remove_hash_from_url(){
  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}

var locationHashURL = window.location.hash.substr(1);
$('#' + locationHashURL).addClass('active');

$('.overlay-bttn').on('click', function(){
  var bttnID = $
(this).attr('href');
  $(bttnID).toggleClass('active');
  $('body').addClass('mobile-scrollable');
});
$('.overlay-close').on('click', function(){
  $(this).parents('.overlay').removeClass('active');
  $('body').removeClass('mobile-scrollable');
  remove_hash_from_url();
  if($('.video-box').length > 0){
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
});

$('.overlay').on('click', function(){
  $(this).removeClass('active');
  $('body').removeClass('mobile-scrollable');
  remove_hash_from_url();
  if($('.video-box').length > 0){
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
});

$('.inner-overlay-box').on('click', function(e){
  e.stopPropagation();
});

// Responsive Table //

$(window).load(function(){
  $('.table.responsive').each(function(){  
    for (var i = 1; i <= $(this).find('th').length ; i++) {
      var thVal = $(this).find('th:nth-child('+i+')').html();
      $(this).find('td:nth-child('+i+')').attr('th-data', thVal);
    };
  });
});

// Message Popup //

var MessagePopup = function(){
  $('.message').addClass('active');
  setTimeout(function(){
    $('.message').removeClass('active');
  },5000);
} 

// Select Menu //

if($(window).width() > 980){
  $(function() {
    $( ".ui-selectmenu" ).selectmenu();
  });
}

// Form Validate //

$('.number-field').numeric();

// $('form').validate({
//   rules: {
//     nickname: {
//       required: true,
//       minlength: 5
//     },
//     email_address: {
//       required: true,
//       minlength: 5,
//       email:true
//     },
//     password: {
//       required: true,
//       minlength: 8
//     },
//     confirm_password: {
//       required: true,
//       minlength : 8,
//       equalTo : "#password"
//     },
//     mobile: {
//       required: true,
//       minlength: 5,
//       number:true
//     }
//   },
//   messages: {
//     nickname: "Please Enter Your Nickname",
//     email_address: "Please Enter Your Email Address",
//     password: "Please Enter Your Password",
//     confirm_password: "Please Confirm Your Password",
//     mobile: "Please Enter Your Mobile Number"
//   },
//   errorPlacement: function(error, element) {
//     error.insertAfter(element);
//   },
//   submitHandler: function (form) {
//     if($('.samanira_secure').val() == '') {
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: $(form).serialize(),
//         success: function () {
//             $('.contact_form :input').prop('disabled', true);
//             $('.message.success').addClass('active'); 
//             setTimeout(function(){
//               $('.message.success').removeClass('active');
//             },5000);
//         }
//       });
//       return false; // required to block normal submit since you used ajax
//     } else {
//       $('.contact_form input[type="submit"]').prop('disabled', true);
//       return false;
//     }
//   }

// });

// Images Upload

$(document).on('change', '#app_images, #profile_picture, #app_logo, #app_banner', function(e) {
  var images = this.files;
  var $input = $(this);
  
  if(images.length > 0) {
    // Clear current images
    $(this).parents('li').find('.uploaded-gallery-box ul li.new').remove();
    
    // Set new images
    for( var i = 0; i < images.length; i++) {
      var reader = new FileReader();
      reader.file = images[i];
      var fileName = this.files[i].name;
      
      reader.onload = function (event) {
        var $parent = $input.parents('li');
        var $li = $('<li>').addClass('new');
      
        var $img = $('<img>').attr({src : event.target.result}).addClass('uploaded-image');
        
        var $remove = $('<a>').attr('href', 'javascript:void(0)').addClass('remove-gallery-image');
        
        var $hidden_input = $('<input>')
        .attr({
            type : 'hidden',
            name : 'images[]',
            value : this.file.name
        });

        $parent.find('span.file-name').text(fileName);
        
        $hidden_input.appendTo($li);
        $img.appendTo($li);
        $remove.appendTo($li);
        $li.appendTo($parent.find('.uploaded-gallery-box ul'));
      };
      reader.readAsDataURL(images[i]);
    }
  }
});

$(document).on('click', 'a.remove-gallery-image', function(e) {
    e.preventDefault();
    $(this).parents('li').find('span.file-name').html(' ');
    $(this).parent('li').remove();
});

$('a.remove-gallery-image').on('click', function(e) {
    e.preventDefault();
    $(this).parents('li').find('span.file-name').html(' ');
    $(this).parent('li').remove();
});

// Files Upload

$(document).on('change', '#app_files', function(e) {
  var $files = this.files;
  var $input = $(this);
  
  if($files.length > 0) {
    // Clear current images
    $(this).parents('li').find('.uploaded-files ul li.new').remove();
    
    // Set new images
    for( var i = 0; i < $files.length; i++) {
      var reader = new FileReader();
      reader.file = $files[i];
      var fileName = this.files[i].name;
      
      reader.onload = function (event) {
        var $parent = $input.parents('li');
        var $li = $('<li>').addClass('new');
      
        var $uploadedFileName = $('<span>').addClass('upoaded-file-name').html(fileName);
        
        var $remove = $('<a>').attr('href', 'javascript:void(0)').addClass('remove-file');
        
        var $hidden_input = $('<input>')
        .attr({
            type : 'hidden',
            name : 'files[]',
            value : this.file.name
        });
        
        $hidden_input.appendTo($li);
        $remove.appendTo($li);
        $uploadedFileName.appendTo($li);
        $li.appendTo($parent.find('.uploaded-files ul'));
      };
      reader.readAsDataURL($files[i]);
    }
  }
});

$(document).on('click', 'a.remove-file', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
});

$('a.remove-file').on('click', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
});

// Cookie

function getRefID(){

  var randomInteger;
  function randomInteger() {
    return Math.floor(Math.random() * (99999));
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {

      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }

    }
    return "";
  }

  // add a cookie alive for 1 hour and assign it a random number

  var now = new Date();
  now.setTime(now.getTime() + 1 * 3600 * 1000);
  document.cookie = "refid=" + randomInteger() + "; expires=" + now.toUTCString() + "; path=/";

  // set reference_id with the cookie info

  var Arefid = getCookie('refid');
  var Aexpires = getCookie('expires');
  var Apath = getCookie('path');

}

getRefID();

// ** Document Ready Finished **
});