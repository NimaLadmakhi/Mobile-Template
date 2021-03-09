$( document ).ready( function () {
  const owlCarousel = $( ".owl-carousel" );
  $( '.owl__btn--next' ).click( function () {
    owlCarousel.trigger( 'next.owl.carousel' );
  } )
  $( '.owl__btn--prev' ).click( function () {
    owlCarousel.trigger( 'prev.owl.carousel' );
  } )
  owlCarousel.owlCarousel( {
    loop: true,
    items: 2,
    margin: 5,
    responsive: {
      300: {
        items: 1
      },
      1300: {
        items: 2,
        margin: 0,
      }
    }
  } );
} );