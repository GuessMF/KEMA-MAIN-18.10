window.addEventListener("load", function () {
  setTimeout(function () {
    const rightProjector = document.querySelector(".right-projector");
    const leftProjector = document.querySelector(".left-projector");

    gsap.to(rightProjector, {
      rotation: 0,
      top: 0,
      right: "25%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
    gsap.to(leftProjector, {
      rotation: 0,
      top: 0,
      left: "10%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
  }, 1000);
  setTimeout(() => {
    const firstBtn = document.querySelector(".first-section__molecules");
    gsap.to(firstBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 2000);

  setTimeout(() => {
    const moleculesImg = document.querySelector(".molecules-img");
    gsap.fromTo(
      moleculesImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          moleculesImg.style.transform = "";
          moleculesImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 2500);

  setTimeout(() => {
    const title = document.querySelector(".first-section__title");
    gsap.to(title, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 3000);

  setTimeout(() => {
    const secondBtn = document.querySelector(".first-section__online-zal");
    gsap.to(secondBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 4000);
  setTimeout(() => {
    const onlineZalImg = document.querySelector(".online-zal-img");
    gsap.fromTo(
      onlineZalImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          onlineZalImg.style.transform = "";
          onlineZalImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 4500);
});

const zalMobile = document.querySelector(".second-section__online-zal");
const moleculesMobile = document.querySelector(".second-section__molecules");
const discMobile = document.querySelector(".second-section__disc-mobile");
const firstLi = document.querySelector(".first-li");
const secondLi = document.querySelector(".second-li");
const thirdLi = document.querySelector(".third-li");
const fourthLi = document.querySelector(".fourth-li");

ScrollTrigger.create({
  trigger: firstLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scale = 0 + progress * 1;
    zalMobile.style.scale = `${scale}`;
    // block.style.clipPath = `inset(0px 0px ${bottomHalfHeight}%)`;
    console.log(scale);
  },
});

ScrollTrigger.create({
  trigger: secondLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    const scalePlus = 0 + progress * 1;
    zalMobile.style.scale = `${scaleMinus}`;
    moleculesMobile.style.scale = `${scalePlus}`;
  },
});

ScrollTrigger.create({
  trigger: thirdLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    const scalePlus = 0 + progress * 1;
    moleculesMobile.style.scale = `${scaleMinus}`;
    discMobile.style.scale = `${scalePlus}`;
  },
});
ScrollTrigger.create({
  trigger: fourthLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    discMobile.style.scale = `${scaleMinus}`;
  },
});

// gsap.to(zalMobile, {
//   scale: 1,
//   scrollTrigger: {
//     trigger: zalMobile,
//     start: "top bottom",
//     end: "center center",
//     scrub: 1,
//   },
// });

// gsap.to(zalMobile, {
//   scale: 0,
//   scrollTrigger: {
//     trigger: moleculesMobile,
//     start: "top bottom",
//     end: "center center",
//     scrub: 1,
//   },
// });

// gsap.to(moleculesMobile, {
//   scale: 1,
//   scrollTrigger: {
//     trigger: moleculesMobile,
//     start: "top bottom",
//     end: "center center",
//     scrub: 1,
//   },
// });

// gsap.to(discMobile, {
//   scale: 1,
//   scrollTrigger: {
//     trigger: discMobile,
//     start: "top bottom",
//     end: "center center",
//     scrub: 1,
//   },
// });

const mobileDiscImg = document.querySelector(".disc__mobile");
mobileDiscImg.style.animation = "rotate 10s linear infinite";
// gsap.to(mobileDiscImg, {
//   rotation: 360, // 360 градусов, чтобы сделать полный оборот
//   duration: 1,
//   repeat: -1, // повторять бесконечно
//   ease: "linear", // линейное вращение без изменения скорости
// });

const superLiteBlock = document.querySelector(".second-section__super-lite");
const liteBlock = document.querySelector(".second-section__lite");
const energyBlock = document.querySelector(".second-section__energy");

gsap.to(superLiteBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: liteBlock,
    start: "center center",
    end: "center center",
    scrub: 1,
  },
});
gsap.to(liteBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: liteBlock,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(energyBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: energyBlock,
    start: "top 30%",
    end: "top 30%",
    scrub: 1,
  },
});

const superLiteBlockMobile = document.querySelector(
  ".second-section__super-lite__mobile"
);
const liteBlockMobile = document.querySelector(".second-section__lite__mobile");
const energyBlockMobile = document.querySelector(
  ".second-section__energy__mobile"
);

gsap.to(superLiteBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: superLiteBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(liteBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: liteBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(energyBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: energyBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

const thirdSectionList1 = document.querySelector(".third-section__list1");
const thirdSectionList2 = document.querySelector(".third-section__list2");
// const thirdSectionListsLeft = document.querySelectorAll(".left-li");

gsap.to(thirdSectionList1, {
  x: 0,
  scrollTrigger: {
    trigger: thirdSectionList1,
    start: "top 80%",
    end: "top 80%",
    scrub: 1,
  },
});
gsap.to(thirdSectionList2, {
  x: 0,
  scrollTrigger: {
    trigger: thirdSectionList2,
    start: "top 80%",
    end: "top 80%",
    scrub: 1,
  },
});

// thirdSectionLists.forEach((list) => {
//   gsap.to(list, {
//     x: 0,
//     scrollTrigger: {
//       trigger: list,
//       start: "top 80%",
//       end: "top 80%",
//       scrub: 1,
//     },
//   });
// });

//bokeIcons
const bokeIcons = document.querySelectorAll(".boke-icon");
function getRandomBokeIcon(icon) {
  const randomNum1 = gsap.utils.random(-15, 15);
  const randomNum2 = gsap.utils.random(-15, 15);

  // const opacityDuration = 1;
  gsap.killTweensOf(icon);

  gsap.to(icon, {
    x: randomNum1,
    y: randomNum2,
    duration: 2,
    onComplete: function () {
      // setTimeout(() => {
      //   gsap.to(icon, {
      //     duration: opacityDuration,
      //   });
      // }, Math.random() * 1000);
    },
  });
}

setInterval(() => {
  bokeIcons.forEach((icon) => {
    getRandomBokeIcon(icon);
  });
}, 2000);

//spans
const spans = document.querySelectorAll(".fourth-section__span");
function getRandomSpan(span) {
  const randomNum1 = gsap.utils.random(-15, 15);
  const randomNum2 = gsap.utils.random(-15, 15);
  //const randomOpacityDuration = Math.random() * 0.5 + 0.5; // случайная длительность для анимации прозрачности
  const opacityDuration = 1; // случайная длительность для анимации прозрачности
  gsap.killTweensOf(span); // останавливаем предыдущие анимации для данного элемента

  gsap.to(span, {
    x: randomNum1,
    y: randomNum2,
    opacity: 0.2,
    // color: "#ffffff",
    // textShadow: "0px 0px 5px rgba(249, 249, 249, 1)",
    color: "#000000",
    textShadow: "none",
    duration: 1,
    onComplete: function () {
      setTimeout(() => {
        gsap.to(span, {
          opacity: 1,
          // color: "#000000",
          // textShadow: "none",
          color: "#ffffff",
          textShadow: "0px 0px 5px rgba(249, 249, 249, 1)",
          duration: opacityDuration,
        });
      }, Math.random() * 1000);
    },
  });
}

setInterval(() => {
  spans.forEach((span) => {
    getRandomSpan(span);
  });
}, 1000);
