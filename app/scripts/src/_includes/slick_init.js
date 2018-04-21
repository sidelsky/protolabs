/**
 * Get the SVG Sprite and load it into the document
 */
(function() {
    $(".slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
})();
