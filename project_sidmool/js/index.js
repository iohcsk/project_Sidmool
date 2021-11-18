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
  

  // goTop button
  document.querySelector(".goTop").addEventListener("click", function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  });
 


});