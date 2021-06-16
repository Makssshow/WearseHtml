$(document).ready(function () {
  var classesText = ".animation_text";
  $(classesText).lettering();
  $(classesText).css("opacity", "1");

  enterView({
    selector: classesText,
    enter: function (el) {
      animationText(el.querySelectorAll("span"));
    },
    offset: 0.2, // enter at middle of viewport
    once: true, // trigger just once
  });

  var classesImage = ".animation_image";
  enterView({
    selector: classesImage,
    enter: function (el) {
      animationImage(el);
    },
    offset: 0.2, // enter at middle of viewport
    once: true, // trigger just once
  });

  var classesBlock = ".animation_block";
  enterView({
    selector: classesBlock,
    enter: function (el) {
      animationBlock(el);
    },
    offset: 0.2, // enter at middle of viewport
    once: true, // trigger just once
  });


});

function animationText(obj) {
  new TimelineMax().staggerFromTo(
    obj,
    1.5 /*<== change this number. This is seconds of the animation */,
    {
      ease: Power3.easeOut,
      bottom:
        -40 /*<== change this number. This is position on start of the animation */,
    },
    { ease: Power3.easeOut, opacity: 1, bottom: 0 },
    0.1 /*<== change this number. This is seconds of delay between the each element */
  );
  /* Also you can change "Power !!3!!" on any number between 1 to 4. Or you can put here a code from https://greensock.com/docs/v2/Easing */
}

function animationImage(obj) {
  new TimelineMax()
    .staggerFromTo(
      obj,
      1.8,
      {
        ease: Power3.easeOut,
        transform: "translateY(30%)",
      },
      { ease: Power3.easeOut, transform: "translateY(0%)", opacity: 1 },
      0.3
    )
    .staggerFromTo(
      obj.querySelectorAll("img"),
      1.8,
      {
        ease: Power3.easeOut,
        transform: "translateY(30%)",
      },
      { ease: Power3.easeOut, transform: "translateY(0%)", opacity: 1 },
      0.3,
      0.4
    );
}

function animationBlock(obj) {
  new TimelineMax().staggerFromTo(
    obj,
    1.5,
    {
      ease: Power3.easeOut,
      transform: "translateY(100%)",
    },
    { ease: Power3.easeOut, transform: "translateY(0%)", opacity: 1 },
    0.3
  );
}
