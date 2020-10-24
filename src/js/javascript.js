/// javascript

if ($('.project-carousel').length) {
    $(".project-carousel").slick({
    
        // normal options...
        centerMode: true,
        dots: false,
        arrows: false,
        accessibility: true,
        infinite: true,
        speed: 650,
        centerPadding: "500px",
        cssEase: "ease",
        slidesToShow: true,
        draggable: true,
        
        // the magic
        responsive: [{
        
            breakpoint: 1600,
            settings: {
                centerPadding: "300px"
            }
        
            }, {
        
            breakpoint: 1200,
            settings: {
                centerPadding: "125px"
            }
        
            }, {
        
            breakpoint: 991,
            settings: {
                centerPadding: "125px"
            }
        
        }, {
            breakpoint: 768,
            settings: {
                centerPadding: "27px"
            }
        }
    ]
    }); 
    $('.project-carousel .slick-current .member-info').css('opacity', '1');

    $('.project-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-current .member-info').css('opacity', '0');
    });
    $('.project-carousel').on('afterChange', function (event, slick, currentSlide) {
        $('.slick-current .member-info').css('opacity', '1');
    });
} 

new WOW().init();
