jQuery(document).ready(function() {
  "use strict";  
  //Toggle Script
  jQuery('.toggle').on('click', function () {
    jQuery(this).toggleClass('active');
    jQuery('body').toggleClass('navigation-open');
  });
  
  jQuery('.close-icon').on('click', function () {
    jQuery('.toggle').removeClass('active');
    jQuery('body').removeClass('navigation-open');
  });
  
  if (screen.width <= 991) {
    jQuery('.dropdown-arrow').on('click', function() {
     var element = jQuery(this).parent('.menu-item-has-children');
     if (element.hasClass('open')) {

       element.removeClass('open');
       element.find('.btn-prev').remove();
       element.find('.menu-item-has-children').removeClass('open');
       element.find('.sub-menu').removeClass('open');

     } else {
       var name = element.find('a').html();
       element.addClass('open');
       element.children('.sub-menu').addClass('open');
       element.find('.btn-prev').remove();
       element.children('.sub-menu').prepend('<li class="btn-prev"><a href="javascript:void(0)"><span>'+name+'</span></a></li>')
       element.siblings('.menu-item-has-children').children('.sub-menu').removeClass('open');
       element.siblings('.menu-item-has-children').removeClass('open');
       element.siblings('.menu-item-has-children').find('.menu-item-has-children').removeClass('open');
       element.siblings('.menu-item-has-children').find('.sub-menu').removeClass('open');

       jQuery('.sub-menu .btn-prev').click(function() {
       jQuery(this).parent().removeClass('open');
       jQuery(this).parent().parent().removeClass('open');
       });
     }
   });
  };


});
  jQuery('#testi-slider-four').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 1
      },
      1000: {
        items: 2,
        center:true,
      },
      1200: {
        items: 2,
        center:true,
      }
    }
  });

  jQuery('#testi-slider-eight').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });
  jQuery('#testi-slider-nine').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });
  jQuery('#testi-slider-ten').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 1,
        center:false,
      },
      1000: {
        items: 2,
        center:true,
      },
      1200: {
        items: 2,
        center:true,
      }
    }
  });

  jQuery('#portfolio-slider-one').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 2,
        center:false,
      },
      1000: {
        items: 2,
        center:true,
      },
      1200: {
        items: 2,
        center:true,
      }
    }
  });

  jQuery('#portfolio-slider-two').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 2,
        center:false,
      },
      1000: {
        items: 2,
        center:true,
      },
      1200: {
        items: 2,
        center:true,
      }
    }
  });

  jQuery('#portfolio-slider-three').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 2,
        center:false,
      },
      1000: {
        items: 2,
        center:true,
      },
      1200: {
        items: 2,
        center:true,
      }
    }
  });

  jQuery('#portfolio-slider-four').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 2,
        center:false,
      },
      1000: {
        items: 2.5,
        center:true,
      },
      1200: {
        items: 3.5,
        center:true,
      }
    }
  });

  jQuery('#portfolio-slider-five').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  });

  jQuery('#portfolio-slider-six').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    autoplay:true,
    center: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        center: false,
      },
      600: {
        items: 1,
        margin: 20,
        center: false,
      },
      700: {
        items: 2,
        margin: 20,
        center: false,
      },
      1000: {
        items: 3,
        center: true,
      },
      1200: {
        items: 3,
        center: true,
      }
    }
  });

  jQuery('#portfolio-slider-seven').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    autoplay:true,
    center: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive: {
       0: {
        items: 1,
        margin: 20,
        center: false,
      },
      600: {
        items: 1,
        margin: 20,
        center: false,
      },
      700: {
       items: 2,
        margin: 20,
        center: false,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  });

  jQuery('#portfolio-slider-eight').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay:true,
    center: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      }
    }
  });

   jQuery('#portfolio-slider-nine').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    autoplay:false,
    center: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    responsive: {
     0: {
        items: 1,
        margin: 20,
        center: false,
      },
      600: {
        items: 1,
        margin: 20,
        center: false,
      },
      700: {
        items: 2,
        margin: 20,
        center: false,
      },
      1000: {
        items: 3,
        center: true,
      },
      1200: {
        items: 3,
        center: true,
      }
    }
  });
