gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");
const bgImg = document.querySelector(".bgimg");
const bgImg2 = document.querySelector(".bgimg-2");

let tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
tl.to(".container-1", { clipPath: "polygon(8% 8%, 93% 8%, 93% 93%, 8% 93%)", duration: 1 });
tl.to(".content-1", { fontSize: "2rem", duration: 1 }, "<");
tl.to(".container-1", { clipPath: "polygon(93% 8%, 93% 8%, 93% 93%, 93% 93%)", ease: "sine.out" }, "+=0.3");
tl.to(".container-2", { clipPath: "polygon(93% 8%, 93% 8%, 93% 93%, 93% 93%)", ease: "sine.out" }, "+=1");
tl.to(".container-3", { clipPath: "polygon(93% 8%, 93% 8%, 93% 93%, 93% 93%)", ease: "sine.out" }, "+=1");
tl.to(".container-4", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "sine.out" }, "+=0.5");
// tl.to(bgImg2, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1 }, "<");

const texts = document.querySelector(".content-4 h1");
const splitText = new SplitType(texts, { types: "chars" });

// console.log(splitText.chars);

splitText.chars.forEach((char) => {
  char.style.transition = "all 0.150s";
  char.style.cursor = "pointer";

  char.addEventListener("mouseover", () => {
    char.style.scale = "1.2";
    char.style.rotate = "5deg";
    char.style.transform = "translateY(-4px)";
  });

  char.addEventListener("mouseleave", () => {
    char.style.scale = "1";
    char.style.rotate = "0deg";
    char.style.transform = "translateY(0px)";
  });
});

texts.addEventListener;

addEventListener;

setTimeout(() => {
  tl.play();
}, 1000);
