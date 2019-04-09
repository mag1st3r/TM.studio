$(function() {

	$('#my-menu').mmenu({
    extension: [ 'widescreen', 'effect-menu-slide'],
    navbar: {
      title: '<img src="img/logo_11.png" alt="Салон ногтьового сервісу ТМ">'
    },
    offCanvas: {
      position: 'right'
    }

  });

    var api = $('#my-menu').data('mmenu');

    api.bind('open', function() {
      $('.hamburger').addClass('is-active');
    });
    api.bind('close', function() {
      $('.hamburger').removeClass('is-active');
    });

  $('.carousel-photos').owlCarousel({
    items:6,
    nav: true,
    smartSpeed: 200,
    navText: ['<i class="fas fa-arrow-circle-left"></i>','<i class="fas fa-arrow-circle-right"></i>'],
    responsive: {
      1800: {
        items: 10,
      },
      1200: {
        items: 8,
      },
      700: {
        items: 5,
      },
       520: {
        items: 3,
      },
      400: {
        items: 2,
      },
      320: {
        items: 2,
      },
    }
  });

$('.lightzoom').lightzoom({
  speed: 400, 
  viewTitle: true,
  isWindowClickClosing: true
});
  //E-mail Ajax Send
$(".call-back").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});
  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });
});




