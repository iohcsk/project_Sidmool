'use strict';

$(document).ready(function(){

  // sidemenu
  $(".sidemenu_open").on("click", function(){
    $(".sidemenu").css({
      right: '0',
      transitionDuration: '.5s'
    });

    $(".sidemenu_close").on("click", function(){
      $(".sidemenu").css({
        right: '-40vw',
        transitionDuration: '.5s'
      });
    });
  });

  
  // contents2 swiper
  if (matchMedia("screen and (min-width:1025px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (matchMedia("screen and (min-width:768px) and (max-width:1024px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (matchMedia("screen and (max-width:767px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  window.onresize = function(){
    document.location.reload();
  };
  

  // goTop button
  document.querySelector(".goTop").addEventListener("click", function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  });
 


});