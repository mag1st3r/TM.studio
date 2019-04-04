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
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-arrow-circle-left"></i>','<i class="fas fa-arrow-circle-right"></i>'],
    responsive: {
      1800: {
        items: 10,
      },
      1200: {
        items: 8,
      },
      700: {
        items: 4,
      },
       520: {
        items: 2,
      },
      320: {
        items: 1,
      },
    }
  });

});

$('.lightzoom').lightzoom({
  speed: 400, 
  viewTitle: true,
  isWindowClickClosing: true
});