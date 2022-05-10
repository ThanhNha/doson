let button__menu = document.getElementById("toggle_nav");

button__menu.addEventListener("click", function (e) {
  let menu__mobile = document.getElementById("menu__mobile");
  if (menu__mobile.classList.contains("open")) {
    menu__mobile.classList.remove("open");
  } else {
    menu__mobile.classList.add("open");
  }
});

$(".testimonial-wrap-2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: "160px",
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
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
