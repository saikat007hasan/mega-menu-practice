$(document).ready(function () {
    $('.homepage-slides').slick({
       autoplay: false,
       dots: true,
    });

  $('.team-list').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  
     
       
   });

   $('.testimonial-list').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
     dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

   })
   $('.logo-carousel').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
     dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
    

   })
  
  $('.team-list-2').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

   })
 
     
});

let search = document.querySelector(".search-icon");


search.onclick = function () {
  document.querySelector(".search-box").classList.toggle('active');
}



$(".portfolio-filter li").on('click', function () {
  $(".portfolio-filter li").removeClass("active");
  $(this).addClass("active");
  var filter = $(this).attr("data-filter");

  $(".portfolio-list").isotope({
    filter: filter,
    layoutMode: 'masonry',
    masonry: {
    columnWidth: '.col-md-3',
    horizontalOrder: false
    
    
  }
  })
})


$(".portfolio-list").isotope({
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.col-md-3',
    horizontalOrder: false
    
    
  }
})




 
 