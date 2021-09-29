/*******************************************************
    Template Name    : Truth - IT Solutions & Agency HTML Template
    Author           : aam-developer
    Version          : 1.0
    Created          : 2020
*******************************************************/
(function($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });

    // Navbar Menu Reduce 
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-md').addClass('navbar-trans');
            $('.navbar-expand-md').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $('.navbar .navbar-brand img').attr('src', 'assets/img/logo.png ');
            }
            if ($(this).scrollTop() < 10) {
                $('.navbar .navbar-brand img').attr('src', 'assets/img/logo-white.png');
            }
        })
    });

    // START PRELOADED
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });

    // Back to top button 
    $(function() {
        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-to-top').addClass('active');
            if (scrolled < 300) $('.back-to-top').removeClass('active');
        });
        // Click Event
        $('.back-to-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });



    //  Star Scrolling nav
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 30)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    // Testimonials owl
    $('#testimonial-slide').owlCarousel({
        margin: 5,
        autoplay: true,
        center: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    // Blog owl
    $('#blog-slide').owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                dotsEach: 1,
                items: 3
            }
        }
    });

    // Partner owl
    $('#partner-slide').owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                dotsEach: 3,
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                dotsEach: 3,
                items: 5
            }
        }
    });


    // Tweet-feed owl
    $('#tweet-feed-slide').owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                dotsEach: 1,
                items: 1
            }
        }
    });


    //  POPUP VIDEO
    $('.popup-video').magnificPopup({
        type: 'iframe',
    });



})(jQuery);