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
  $( ".header__icon" ).click( function () {
    $( ".header__list" ).toggleClass( 'header__list--hide' );
  } );

  if ( window.innerWidth > 1000 ) {
    const scrollReveal = new ScrollReveal();
    scrollReveal.reveal( '.banner__title', makeReveal( 'top' ) );
    scrollReveal.reveal( '.banner__desc', makeReveal( 'left' ) );
    scrollReveal.reveal( '.banner__button', makeReveal( 'bottom' ) );
    scrollReveal.reveal( '.banner__image', makeReveal( 'right' ) );
    scrollReveal.reveal( '.header__logo', makeReveal( 'left' ) );
    scrollReveal.reveal( '.header__item', makeReveal( 'right' ) );
    scrollReveal.reveal( '.services__card--first', makeReveal( 'right' ) );
    scrollReveal.reveal( '.services__card--second', makeReveal( 'bottom' ) );
    scrollReveal.reveal( '.services__card--third', makeReveal( 'left' ) );
    scrollReveal.reveal( '.about__container-img', makeReveal( 'left' ) );
    scrollReveal.reveal( '.about__card--one', makeReveal( 'right' ) );
    scrollReveal.reveal( '.about__card--two', makeReveal( 'right', 500 ) );
    scrollReveal.reveal( '.about__card--three', makeReveal( 'right', 1000 ) );
    scrollReveal.reveal( '.sliding', makeReveal( 'right' ) );
    scrollReveal.reveal( '.footer__form', makeReveal( 'left' ) );
    scrollReveal.reveal( '.footer__body', makeReveal( 'right', 500 ) );
    scrollReveal.reveal( '.footer__item--first a', makeReveal( 'bottom', 1000 ) );
    scrollReveal.reveal( '.footer__item--second a', makeReveal( 'top', 1000 ) );
    scrollReveal.reveal( '.footer__item--third a', makeReveal( 'bottom', 1000 ) );
    scrollReveal.reveal( '.footer__item--fourth a', makeReveal( 'top', 1000 ) );
    scrollReveal.reveal( '.footer__item--fiveth a', makeReveal( 'bottom', 1000 ) );
    scrollReveal.reveal( '.footer__end span', makeReveal( 'bottom', 2000 ) );
  }
} );


function makeReveal( origin, delay = 0 ) {
  return { origin, duration: 2000, reset: true, distance: '50px', delay };
}

