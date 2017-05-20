/* Services */
$(function () {
    // initialize on scroll
    new WOW().init();
});

/* Work */
$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* Team */
$(function () {
    $("#team-members").owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayHoverPause: true
    });
});

/* Testimonial */
$(function () {
    $("#customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayHoverPause: true
    });
});

/* Stats */
$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
});

/* Client */
$(function () {
    $("#clients-list").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayHoverPause: true
    });
});