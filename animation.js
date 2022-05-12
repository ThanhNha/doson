gsap.registerPlugin(ScrollTrigger);

const scrollProperties = (section) => {
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
  let text1 = sectionText.querySelector(".p1");
  let text2 = sectionText.querySelector(".sub-title");

  let textTimeline = new gsap.timeline(scrollProperties(section));
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

  //   let sectionImage = section.querySelector(".section__image");
  //   let imageTimeline = new gsap.timeline(scrollProperties(section));
  //   imageTimeline.from(sectionImage, {
  //     opacity: 0,
  //     xPercent: 10,
  //     duration: 0.6,
  //     ease: "power1",
  //   });
});
