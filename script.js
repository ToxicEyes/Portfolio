const csr_blur = document.querySelector("#cursor_blur");
const csr = document.querySelector("#cursor_color");

function csrMover(height, width) {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#cursor_color"
    ).style.top = `${dets.clientY}px`;
    this.document.querySelector(
      "#cursor_color"
    ).style.left = `${dets.clientX}px`;

    this.document.querySelector("#cursor_blur").style.top = `${dets.clientY}px`;
    this.document.querySelector(
      "#cursor_blur"
    ).style.left = `${dets.clientX}px`;
  });
}
csrMover();

function aboutScale() {
  document
    .querySelector("#about-desc h4")
    .addEventListener("mouseenter", function () {
      csr.style.height = "200px";
      csr.style.width = "200px";
      csr.style.backgroundColor = "#d9e7ff";
      csr_blur.style.opacity = 0;
    });
}

aboutScale();

function aboutNormal() {
  document
    .querySelector("#about-desc h4")
    .addEventListener("mouseleave", function () {
      csr.style.height = "20px";
      csr.style.width = "20px";
      csr_blur.style.opacity = 1;
    });
}

aboutNormal();

const projects = document.querySelectorAll(".element");

var rotate = 0;
var diffrot = 0;

projects.forEach(function (element) {
  element.addEventListener("mousemove", function (dets) {
    csr.style.height = "50px";
    csr.style.width = "50px";
    csr.style.top = dets.clientY - element.getBoundingClientRect().top - "px";
    csr.style.left = dets.clientX - element.getBoundingClientRect().left - "px";

    // to get div distance from every corner
    var diffTop = dets.clientY - element.getBoundingClientRect();

    //current position of mouse - previous one
    diffrot = dets.clientX - rotate;
    //new current position
    rotate = dets.clientX;

    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diffTop,
      duration: 0.5,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-15, 20, diffrot),
    });
  });

  element.addEventListener("mouseleave", function (dets) {
    csr.style.height = "15px";
    csr.style.width = "15px";
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
});

const images = document.querySelectorAll(".element img");

if (Screen.width <= "768px") {
  images.forEach(function (eleme) {
    eleme.addEventListener("mouseenter", function (e) {
      eleme.style.opacity = 0;
    });
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const about = document.querySelector("#about");


function animation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -90,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });

  tl.to(".bounding-elem", {
    y: 0,
    x: 0,
    opacity: 1,
    duration: 1,
    ease: Power2,
    stagger: 0.4,
  });

  tl.to(about,1.5,{
    onComplete:aboutAppear,
  })

  tl.to(about,2.46,{
    onComplete:proApper,
  })
}

animation();

var tl = gsap.timeline();



function aboutAppear(){
  var tl = gsap.timeline();
  tl.to("#about-desc,#about>#scroller>#scroller-1",{
    opacity:1,
    ease:Power2,
    duration:1,
  })
}

function proApper(){
  var tl = gsap.timeline();
  tl.to(".element,#projects>#scroller>#scroller-1",{
    opacity:1,
    ease:Power2,
    duration:1,
    stagger:0.4,
  })
}







