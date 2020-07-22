const intro = document.querySelector('.intro');
const video = intro.querySelector('video');

const section2 = document.querySelector('.section-2')
const end = section2.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration : 13090,
  triggerElement : intro,
  triggerHook : 0
})
.setPin(intro)
.addTo(controller);

//Animation
let accel = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e=>{   //Scroll Event Listener
  scrollPos = e.scrollPos/1000;
})

setInterval(() =>{
  delay += (scrollPos - delay)*accel;
  video.currentTime = delay;
},30);

// Navbar scrolling

$("#home-button").click(function() {
  $('html,body').animate({
      scrollTop: 0},
      'slow');
});

$("#about-button").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-2").offset().top},
      'slow');
});

$("#dev-button").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-3").offset().top-40},
      'slow');
});

$("#contact-button").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-10").offset().top-40},
      'slow');
});