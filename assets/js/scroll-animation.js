$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  //main horizontal scroll
  let container = document.querySelector(".scroll");
  let scrollSection = document.querySelector(".scroll__wrap");

  if (scrollSection) {
    //menu change color
    ScrollTrigger.create({
      trigger: ".scroll",
      start: () => "top +=" + $(".header__logo").height() / 2,
      end: () =>
        "+=" +
        (scrollSection.offsetWidth + $(window).height()) +
        " " +
        $(".header__logo").height() / 2,
      toggleClass: { targets: ".header", className: "header_dark" },
      markers: false,
      scrub: false,
    });

    gsap.to(scrollSection, {
      x: () =>
        -(scrollSection.scrollWidth - document.documentElement.clientWidth) +
        "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        markers: false,
        scrub: 0.5, //Change this number. It's secons. It change smooth
        end: () => "+=" + scrollSection.offsetWidth,
      },
    });
  }

  //portfolio animation

  const portImg = gsap.utils.toArray(".portfol");
  if (portImg) {
    portImg.forEach((img) => {
      let ImgPortf = img.querySelector(".ImgPortf");
      gsap.to(ImgPortf, {
        transform: "translate(0, 0)",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom 80%",
          markers: false,
        },
      });
    });
  }

  //Hero animation
  $(
    ".hero-anim_left_1, .hero-anim_left_2, .hero-anim_left_3, .hero-anim_right_1, .hero-anim_right_2, .hero-anim_right_3"
  ).css("opacity", "1");

  ScrollTrigger.defaults({
    scrub: 2, //Smooth of animation in seconds
  });

  //On load anim
  var hero__item_left_1 = $(".hero-anim_left_1");
  var hero__item_left_2 = $(".hero-anim_left_2");
  var hero__item_left_3 = $(".hero-anim_left_3");
  var hero__item_right_1 = $(".hero-anim_right_1");
  var hero__item_right_2 = $(".hero-anim_right_2");
  var hero__item_right_3 = $(".hero-anim_right_3");
  hero_anim = gsap.timeline({
    repeat: 0,
    delay: 0, //change delay before start of the all animation
    defaults: {
      duration: 2, //duration of each animation
      ease: "power3.out", // https://greensock.com/docs/v3/Eases  Choose ease here
    },
  });

  var delayTime_2 = 0.6; //Change this to change delay time at ...left_2
  var delayTime_3 = 1;

  hero_anim
    .from(hero__item_right_1, { x: "80%", y: "100vh" })
    .from(hero__item_right_2, { x: "80%", y: "100vh", delay: delayTime_2 }, 0)
    .from(hero__item_right_3, { x: "80%", y: "100vh", delay: delayTime_3 }, 0)
    .from(hero__item_left_1, { x: "-30%", y: "100vh" }, 0)
    .from(hero__item_left_2, { x: "-30%", y: "100vh", delay: delayTime_2 }, 0)
    .from(hero__item_left_3, { x: "-30%", y: "100vh", delay: delayTime_3 }, 0);

  var hero_text_scroll = gsap.timeline({
    scrub: 2, //Smooth of animation in seconds
    scrollTrigger: {
      trigger: ".hero-anim_wrap",
      start: "top top",
      end: "bottom top",
      markers: false,
    },
  });

  var hero_left_1 = $(".hero-anim_left_1 .hero-anim__title");
  var hero_left_2 = $(".hero-anim_left_2 .hero-anim__title");
  var hero_left_3 = $(".hero-anim_left_3 .hero-anim__title");
  var hero_right_1 = $(".hero-anim_right_1 .hero-anim__title");
  var hero_right_2 = $(".hero-anim_right_2 .hero-anim__title");
  var hero_right_3 = $(".hero-anim_right_3 .hero-anim__title");

  hero_text_scroll
    .to(hero_left_1, { marginLeft: "50%" })
    .to(hero_left_2, { marginLeft: "50%" }, 0)
    .to(hero_left_3, { marginLeft: "50%" }, 0)
    .to(hero_right_1, { marginRight: "50%" }, 0)
    .to(hero_right_2, { marginRight: "50%" }, 0)
    .to(hero_right_3, { marginRight: "50%" }, 0);

  //hero Center
  var hero_center_l_1 = $(".animation_center_left");
  var hero_center_r_1 = $(".animation_center_right");

  var hero_center = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation_center_wrap",
      start: "top top",
      end: "bottom top",
      markers: false,
    },
  });

  hero_center
    .to(hero_center_l_1, {
      xPercent: -100,
    })
    .to(
      hero_center_r_1,
      {
        xPercent: 100,
      },
      0
    );


    //Text left and right

    var text_left = gsap.utils.toArray(".animation_text_left div");
    var text_right = gsap.utils.toArray(".animation_text_right div");

    text_left.forEach(text => {
      gsap.from(
        text, {
          transform: "translateX(-100%)",
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top center",
          markers: false,
        },
      });
    });

    text_right.forEach(text => {
      gsap.from(
        text, {
          transform: "translateX(100%)",
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top center",
          markers: false,
        },
      });
    });

});
