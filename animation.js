gsap.registerPlugin(ScrollTrigger);

const scrollAnimation = (section) => {
  return {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play complete none",
      start: "top 80%",
      end: "bottom top",
    },
  };
};

let sections = document.querySelectorAll("section");
sections.forEach(function (section) {
  let sectionText = section.querySelector(".section-title");
  let title = sectionText.querySelector(".section-title h1");
  let text1 = sectionText.querySelector(".des-animation");
  let text2 = sectionText.querySelector(".sub-title");

  let textTimeline = new gsap.timeline(scrollAnimation(section));
  textTimeline.from([title, text2], {
    opacity: 0,
    xPercent: 10,
    duration: 0.6,
    ease: "power0",
  });
  textTimeline.from(
    text1,
    {
      opacity: 0,
      xPercent: -10,
      duration: 0.8,
      ease: "power0",
    },
    "-=1"
  );
});

let figures = gsap.utils.toArray(".animation__image");
figures.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "resume pause resume pause",
    },
  });
});

let images = gsap.utils.toArray(".animation__image img");
images.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    scale: 1.5,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "resume pause resume pause",
    },
  });
});

// // Fade In Transitions
function fadeInUpInit() {
  gsap.utils.toArray(".animation-wrapper").forEach((section) => {
    const elems = section.querySelectorAll(".animation-item");
    // Set starting params for sections
    gsap.set(elems, {
      y: 60,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      overwrite: "auto",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 30%",
      markers: false,
      // toggleActions: "play complete none",
      onEnter: () =>
        gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: 0.7,
        }),
      // onLeave: () =>
      //   gsap.to(elems, {
      //     y: -50,
      //     opacity: 0,
      //     stagger: 0.5,
      //   }),
      // onEnterBack: () =>
      //   gsap.to(elems, {
      //     y: 0,
      //     opacity: 1,
      //     stagger: -0.5,
      //   }),
      // onLeaveBack: () =>
      //   gsap.to(elems, {
      //     y: 50,
      //     opacity: 0,
      //     stagger: -0.5,
      //   }),
    });
  });
}

fadeInUpInit();

gsap.utils.toArray(".fade-anim").forEach((panel, i) => {
  const fadeAnim = gsap.to(panel, {
    opacity: 1,
    duration: 1,
  });
  ScrollTrigger.create({
    animation: fadeAnim,
    trigger: panel,
    start: "top 75%",
    end: "bottom 75%",
    markers: false,
    toggleActions: "play none none none",
  });
});

var optionImgFirst = {
  top: "5%",
  duration: 1.5,
  delay: 1,
};
var optionImgSecond = {
  left: "20%",
  duration: 1.5,
  delay: 1,
};
var optionImgThird = {
  bottom: "20%",
  duration: 1.5,
  delay: 1,
};

if ($(window).width() < 767) {
  optionImgFirst.yPercent = 100;
  optionImgThird.bottom = "13%";
  optionImgSecond.left = "33%";
}

gsap.utils.toArray(".img-combo-anim").forEach((panel, i) => {
  if ($(panel).find(".img-1").length) {
    var img_first = $(panel).children(".img-1");
    var img_second = $(panel).children(".img-2");
    var img_third = $(panel).children(".img-3");
    console.log(panel);

    ScrollTrigger.create({
      trigger: panel,
      start: "top 75%",
      end: "bottom 75%",
      toggleActions: "play none none none",
      markers: false,
      onEnter: () => {
        gsap.to(img_first, optionImgFirst);
        gsap.to(img_second, optionImgSecond);
        gsap.to(img_third, optionImgThird);
      },
    });
  }
});

const items__left = gsap.utils.toArray(".fade-left");

items__left.forEach((item__left, i) => {
  const anim = gsap.fromTo(
    item__left,
    { autoAlpha: 0, x: -50 },
    { duration: 1, autoAlpha: 1, x: 0 }
  );
  ScrollTrigger.create({
    trigger: item__left,
    animation: anim,
    toggleActions: "play none reverse none",
    once: true,
  });
});

const items__right = gsap.utils.toArray(".fade-right");

items__right.forEach((item__right, i) => {
  const anim = gsap.fromTo(
    item__right,
    { autoAlpha: 0, x: 50, opacity: 0 },
    { duration: 1, autoAlpha: 1, x: 0, opacity: 1 }
  );
  ScrollTrigger.create({
    trigger: item__right,
    animation: anim,
    toggleActions: "play none reverse none",
    once: true,
  });
});
// CURSOR
// var cursor = $(".cursor"),
//   follower = $(".cursor-follower");

// var posX = 0,
//   posY = 0;

// var mouseX = 0,
//   mouseY = 0;

// TweenMax.to({}, 0.016, {
//   repeat: -1,
//   onRepeat: function () {
//     posX += (mouseX - posX) / 9;
//     posY += (mouseY - posY) / 9;

//     TweenMax.set(follower, {
//       css: {
//         left: posX - 12,
//         top: posY - 12,
//       },
//     });

//     TweenMax.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//   },
// });

// $(document).on("mousemove", function (e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });
// // yellow circle
// $(".link").on("mouseenter", function () {
//   cursor.addClass("active");
//   follower.addClass("active");
// });
// $(".link").on("mouseleave", function () {
//   cursor.removeClass("active");
//   follower.removeClass("active");
// });
