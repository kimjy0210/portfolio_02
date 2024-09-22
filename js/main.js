// 문서준비이벤트
$(function () {
  // 풀페이지
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,

    navigation: true,
    navigationPosition: 'left',

    responsiveWidth: 1084,


    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;

      // 구역 5를 떠난 후 6에 도달했을 때
      if (destination == 6) {
        $("#fp-nav").fadeOut();
      } else {
        $("#fp-nav").fadeIn();
      }

      // 구역2, 4, 5에 도달했을 때 #header 및 #fp-nav
      if (destination == 2 || destination == 4 || destination == 5 || destination == 6) {
        $("#header").css({ "border": "0", "background": "#f6f6f0" });
        $("#header .gnb > li > a").css({ "color": "var(--gray-color)" });

        $(".ham span").css({ "background": "var(--gray-color)" });

        $("#fp-nav ul li a span").css({ "border-color": "var(--gray-color)", "background": "var(--gray-color)", "background-clip": "content-box" });

      } else {
        $("#header").css({ "border-bottom": "01px solid rgba(255,255,255,0.5)", "background": "transparent" });
        $("#header .gnb > li > a").css({ "color": "#fff" });

        $(".ham span").css({ "background": "#fff" });

        $("#fp-nav ul li a span").css({ "border-color": "#fff", "background": "#fff", "background-clip": "content-box" });

        $("#header").mouseenter(function () {
          $("#header").addClass("active");
          $(".gnb > li > a").css({ "color": "var(--gray-color)" });
          $(".ham span").css({ "background": "var(--gray-color)" });
        });

        $("#header").mouseleave(function () {
          $("#header").removeClass("active");
          $(".gnb > li > a").css({ "color": "#fff" });
          $(".ham span").css({ "background": "#fff" });
        });
      }

      // 구역3에 도달했을 때 #header 및 #fp-nav
      if (destination == 3) {
        $("#header").css({ "backdrop-filter": "blur(10px)" });
      } else {
        $("#header").css({ "backdrop-filter": "blur(0)" });
      }

      // 구역3에 도달했을 때 #header 및 #fp-nav
      if (destination == 6) {
        $("#header").css({ "background": "#f6f6f0" });
      } else {
        $("#header").css({ "background": "transparent" });
      }

    }
  });


  // scroll 
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 919) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }
  });

  // 프로모션 영역
  const pr = new Swiper('.pr', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    grabCursor: true,

    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  // 객실 영역
  $(".room_img > li:not(:first-child)").hide();
  $(".room_name > li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".room_img > li").eq(idx).fadeIn(500).siblings().fadeOut(0);
  });

  const roomsd = new Swiper('.roomsd', {
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

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  // 지도 영역
  $(".map_img img:not(:first-child)").hide();
  $(".map_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".map_img img").eq(idx).fadeIn(500).siblings().fadeOut(0);
  });



}); // 문서준비이벤트 종료 (삭제x)