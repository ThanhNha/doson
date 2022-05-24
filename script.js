$(".value-block span").counterUp({
  delay: 15,
  time: 3000,
});

$(".testimonial-wrap-2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: "250px",
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
      },
    },
  ],
});
$(".wrapper-blogs").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        arrows: false,
      },
    },
  ],
});
$(".wrapper-cards-flow.mobile").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
      },
    },
  ],
});

function header() {
  var header = gsap.to("#header", { y: "-=300", duration: 0.1, ease: "power2.in", paused: true });
  //fixed header
  ScrollTrigger.create({
    trigger: "#header",
    start: "200px top",
    end: 99999,
    toggleClass: { className: "scrolled", targets: "#header" },
    onUpdate: ({ progress, direction, isActive }) => {
      if (direction == -1) {
        header.reverse();
      }
      if (direction == 1) {
        header.play();
      } else if (direction == 1 && isActive == true) {
        header.play();
      }
    },
  });

  const hamburger = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    body.classList.toggle("fixed");
  });
}
header();

function headerFadeout() {
  var logo = gsap.to("#logo_menu", {
    x: "-=300",
    duration: 0.5,
    ease: "power2.in",
    paused: true,
  });
  //fade out logo
  ScrollTrigger.create({
    trigger: "#logo_menu",
    start: "150px top",
    end: 99999,
    onUpdate: ({ progress, direction, isActive }) => {
      if (direction == -1) {
        logo.reverse();
      }
      if (direction == 1) {
        logo.play();
      } else if (direction == 1 && isActive == true) {
        logo.play();
      }
    },
  });
  //fade out menu
  var navbar = gsap.to("#navbarmain", {
    x: "1000",
    duration: 0.3,
    ease: "power2.in",
    paused: true,
  });
  //fixed header
  ScrollTrigger.create({
    trigger: "#navbarmain",
    start: "100px top",
    end: 99999,
    onUpdate: ({ progress, direction, isActive }) => {
      if (direction == -1) {
        navbar.reverse();
      }
      if (direction == 1) {
        navbar.play();
      } else if (direction == 1 && isActive == true) {
        navbar.play();
      }
    },
  });
}
headerFadeout();
