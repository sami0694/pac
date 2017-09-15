// Make it rain!!!
var buttonOffset = $('.str').offset().top;

$( '.caro img' ).eq( 1 ).hide();
$( '.caro img' ).eq( 2 ).hide();
$( '.caro img' ).eq( 3 ).hide();
var seq = 0;

$('#rarrow i').on('click', function ()
{
  if (seq <3){
    $( '.caro img' ).eq(seq).hide();
    seq++;
    $( '.caro img' ).eq(seq).fadeIn(400);
  }
  else if(seq ==3){
    $( '.caro img' ).eq(seq).hide();
    seq=0;
    $( '.caro img' ).eq(seq).fadeIn(400);
  }
});


$('#larrow i').on('click', function ()
{
  if (seq >0){
    $( '.caro img' ).eq(seq).hide();
    seq--;
    $( '.caro img' ).eq(seq).fadeIn(400);
  }
  else if(seq == 0){
    $( '.caro img' ).eq(seq).hide();
    seq=3;
    $( '.caro img' ).eq(seq).fadeIn(400);
  }
});

$('.bru').on('click', function (){
  $('.brunch').fadeIn(1000);
  $('.dinner').hide();
  $('.drinks').hide();
  console.log("working");
  $('.bru').addClass('addUL');
  $('.din').removeClass('addUL');
  $('.drin').removeClass('addUL');
  buttonOffset = $('.str').offset().top;
});

$('.din').on('click', function (){
  $('.brunch').hide();
  $('.dinner').fadeIn(1000);
  $('.drinks').hide();
  console.log("working");
  $('.din').addClass('addUL');
  $('.bru').removeClass('addUL');
  $('.drin').removeClass('addUL');
  buttonOffset = $('.str').offset().top;
});

$('.drin').on('click', function (){
  $('.brunch').hide();
  $('.dinner').hide();
  $('.drinks').fadeIn(1000);
  $('.din').removeClass('addUL');
  $('.bru').removeClass('addUL');
  $('.drin').addClass('addUL');
  console.log("working");
  buttonOffset = $('.str').offset().top;
});


var headerNav = $('header nav');
console.log($(window).scrollTop());

$(window).scroll(function() {
  var distanceScrolled = $(this).scrollTop();
  if (distanceScrolled >= 50) {
    headerNav.addClass('navcolor');
  }
  else{
    headerNav.removeClass('navcolor');
  }

  if (distanceScrolled >= buttonOffset || distanceScrolled>2160) {
    $('button').addClass('shake');
  }
  else{
    $('button').removeClass('shake');
  }


});
$('header nav i').on('click', function (){
  $('header nav a').toggle();
  console.log("working");
});





// Create a variable to keep track of which image # we're on
// When the user clicks the right arrow
  // If imageNumber < 3
