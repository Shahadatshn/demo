$(function(){
"use strict";
        
// back to top 
var back2top = $(".back-to-top");
var html_body = $('html, body');
    back2top.on('click', function(){
    html_body.animate({scrollTop:0},1500);
    });
    
    
// sticky menu
$(window).on('scroll', function(){
   var scrroling = $(this).scrollTop();
    if(scrroling >150){
        $(".navbar").addClass("menu-bg");
    }
    else{
        $(".navbar").removeClass("menu-bg");
    }
    if(scrroling >50){
        back2top.fadeIn(500);
    }
    else{
        back2top.fadeOut(500);
    }
});
    
//smooth scrolling animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });

//mixitup js
    var mixer = mixitup('.portfolio-content');  
    
    
    
// testimonials/clients slider       
$('.testi-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:false,
    fade:false,
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
  ]    
});
//counter js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
//preloader    
$(window).on('load', function(){
    $(".preloader").delay(400).fadeOut(400);
});
    
    
//type js
 $(".typer").typed({
        strings: ["web designer", "web developer"],
        typeSpeed: 150,
        contentType: 'html',
        loop:true
      }); 
    
// Closes responsive menu when a scroll link is clicked
	$('.nav-link').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
//==============index2 silder version=================
// banner slider
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    speed:1500,
    autoplaySpeed: 2000,
});

// ser-slider       
$('.ser-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:false,
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }
  ]    
});
    
    
//========= index4 version/bg video   
jQuery(".player").YTPlayer();


//============= inedx3 version perticles part================
// ParticlesJS Config. 
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#7c7a7a"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#aaa7a7",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
    });    
 

    
    
    
    
    
    
    
    

    
});


















