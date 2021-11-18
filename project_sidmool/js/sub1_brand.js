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

  // goTop button
  document.querySelector(".goTop").addEventListener("click", function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  });
    
});