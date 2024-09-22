// 문서준비이벤트
$(function () {

  // sub lnb
  $(".lnb > li").click(function () {
    $(".mlnb").stop().slideToggle();
    $(this).toggleClass("over");
  });

  // sub promotion
  $(".promotion .pr_more").click(function () {
    $(".promotion ul li:nth-child(n+7)").stop().fadeToggle();
  });

  // sub event
  const wd = new Swiper('.wd', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

});